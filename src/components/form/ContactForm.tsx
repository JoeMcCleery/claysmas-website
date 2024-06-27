"use client";

import { useFormState } from "react-dom";
import RadioInput from "@/components/inputs/RadioInput";
import TextInput from "@/components/inputs/TextInput";
import CheckboxInput from "@/components/inputs/CheckboxInput";
import Button from "@/components/inputs/Button";
import { contactClanta } from "@/actions/email";
import FormMessage from "../inputs/FormMessage";

const initialState = {
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(contactClanta, initialState);

  const requestOptions = [
    { value: "Clay Anything", label: "Anything" },
    { value: "Nike Claymax", label: "Nike Claymax" },
    { value: "Clay Prosthetic Anything", label: "Clay Prosthetic Anything" },
  ];

  return (
    <form
      action={formAction}
      className="grid gap-6"
    >
      <h2 className="text-3xl font-bold text-center">
        Let Clanta Know What You Want For Claysmas!
      </h2>
      <TextInput
        label="First Name"
        name="firstName"
        required
      />
      <TextInput
        label="Last Name"
        name="lastName"
        required
      />
      <TextInput
        type="email"
        label="Email"
        name="email"
        required
      />
      <RadioInput
        label="What do you want? (There are only 3 things you can make out of clay)"
        name="request"
        options={requestOptions}
        required
      />
      <CheckboxInput
        label="Are you the Clinch?"
        name="isClinch"
      />
      <CheckboxInput
        label="Send me clay facts"
        name="subscribed"
        defaultChecked
      />
      <FormMessage
        message={state.message}
        error={state.error}
      />
      <Button type="submit">Contact Clanta</Button>
    </form>
  );
}
