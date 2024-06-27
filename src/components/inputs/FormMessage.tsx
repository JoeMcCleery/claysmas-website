import { useFormStatus } from "react-dom";

interface FormMessageProps {
  message: string | string[];
  error?: boolean;
}

export default function FormMessage({ message, error }: FormMessageProps) {
  const { pending } = useFormStatus();

  let content = <p>{message}</p>;
  if (Array.isArray(message)) {
    content = (
      <>
        {message.map((m, i) => (
          <p key={i}>{m}</p>
        ))}
      </>
    );
  }

  return (
    message &&
    !pending && (
      <div
        className={`p-4 text-gray-50 rounded text-center relative ${
          error ? "bg-red-600" : "bg-gray-600"
        }`}
      >
        {content}
      </div>
    )
  );
}
