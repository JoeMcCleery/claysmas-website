"use client";

import VerticalInputContainer from "./VerticalInputContainer";

interface TextInputProps {
  name: string;
  label: string;

  type?: "text" | "email";
  defaultValue?: string;
  required?: boolean;
}

export default function TextInput({
  type,
  name,
  label,
  defaultValue,
  required,
}: TextInputProps) {
  return (
    <VerticalInputContainer>
      <label htmlFor={name}>
        <strong>{label}</strong>
      </label>
      <input
        type={type || "text"}
        id={name}
        name={name}
        defaultValue={defaultValue}
        required={required}
        className="border p-1 rounded text-gray-900 bg-white"
      />
    </VerticalInputContainer>
  );
}
