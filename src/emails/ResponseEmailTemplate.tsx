import { Container, Heading, Section, Text } from "@react-email/components";
import EmailTemplate from "./EmailTemplate";

interface ResponseEmailTemplateProps {
  body: { [key: string]: string };
}

export default function ResponseEmailTemplate({
  body = {
    firstName: "Joe",
    lastName: "McC",
    email: "test@test.com",
    request: "Clay Anything",
    subscribed: "on",
    getsGrit: "on",
  },
}: ResponseEmailTemplateProps) {
  const fullName = `${body["firstName"]} ${body["lastName"]}`;
  const signOff = body.getsGrit ? "From Clanta 🖕" : "From Clanta with love ❤️";

  return (
    <EmailTemplate
      title="Claymail"
      previewText={signOff}
    >
      <Container className="bg-gray-50 p-4 text-center">
        <Section>
          <Heading>Merry Claysmas {fullName}!</Heading>
          <Text>
            I have reviewed your request for {body.request}. I am pleased to
            inform you that...
          </Text>
        </Section>

        <Section>
          {body.getsGrit ? (
            <>
              <Heading as="h2">You have not been nice! 😡</Heading>
              <Text>Cop a handful of grit in your eyes! ⌛👁️</Text>
            </>
          ) : (
            <>
              <Heading as="h2">You have been nice! 😊</Heading>
              <Text>
                I will get my clay primordial dwarves to prepare your Claysmas
                present! 🏆🎁
              </Text>
            </>
          )}
          <Text>{signOff}</Text>
        </Section>
      </Container>
    </EmailTemplate>
  );
}
