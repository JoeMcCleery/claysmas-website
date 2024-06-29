import { Container, Heading, Section, Text } from "@react-email/components";
import EmailTemplate from "./EmailTemplate";

interface ContactEmailTemplateProps {
  body: { [key: string]: string };
}

export default function ContactEmailTemplate({
  body = {
    firstName: "Joe",
    lastName: "McC",
    email: "test@test.com",
    request: "Clay Anything",
    subscribed: "on",
    getsGrit: "on",
  },
}: ContactEmailTemplateProps) {
  const data = Object.entries(body).map(([key, value]) => ({ key, value }));

  const fullName = `${body["firstName"]} ${body["lastName"]}`;

  return (
    <EmailTemplate
      title="Claymail"
      previewText={`${fullName} wants some clay!`}
    >
      <Container className="bg-gray-50 p-4">
        <Section className="text-center">
          <Heading>Merry Claysmas</Heading>
          <Text>{fullName} wants some clay!</Text>
        </Section>

        <Section>
          <Heading as="h2">Details</Heading>
          {data.map((e) => (
            <Text key={e.key}>
              <strong>{e.key}:</strong> {e.value}
            </Text>
          ))}
        </Section>
      </Container>
    </EmailTemplate>
  );
}
