"use server";

import ContactEmailTemplate from "@/emails/ContactEmailTemplate";
import ResponseEmailTemplate from "@/emails/ResponseEmailTemplate";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || "";
const toEmail = process.env.TO_EMAIL || "";
const audienceId = process.env.RESEND_AUDIENCE_ID || "";

export async function contactClanta(prevState: any, formData: FormData) {
  const schema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    request: z.string().min(1),
    notClinch: z.string(),
    subscribed: z.string().optional(),
  });

  const parse = schema.safeParse(Object.fromEntries(formData));

  if (!parse.success) {
    if (parse.error.flatten().fieldErrors.notClinch) {
      return {
        error: true,
        message: "Get the fuck out of here you dirty Clinch!",
      };
    }

    return {
      error: true,
      message: Array.from(
        Object.entries(parse.error.flatten().fieldErrors)
      ).map(([key, val]) => `${key}: ${val}`),
    };
  }

  const body = parse.data;

  try {
    const { error: contactError } = await resend.contacts.create({
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      unsubscribed: !body.subscribed,
      audienceId,
    });

    if (contactError) {
      return { error: true, message: contactError.message };
    }

    const { error: emailError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: body.email,
      subject: "You Got Claymail",
      react: ContactEmailTemplate({ body }),
    });

    if (emailError) {
      return { error: true, message: emailError.message };
    }

    await sendClantasResponse(body);

    return {
      message: "Clanta will review your request and get back to you.",
    };
  } catch (error) {
    return { error: true, message: "Something went wrong!" };
  }
}

export async function sendClantasResponse(body: { [key: string]: string }) {
  await resend.emails.send({
    from: `Clanta <${fromEmail}>`,
    to: body.email,
    subject: `Dear ${body.firstName} ${body.lastName}`,
    react: ResponseEmailTemplate({ body }),
  });
}
