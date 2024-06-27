"use client";

import HorizontalInputContainer from "./HorizontalInputContainer";

interface CheckboxInputProps {
  name: string;
  label: string;

  defaultChecked?: boolean;
  required?: boolean;
}

export default function CheckboxInput({
  name,
  label,
  defaultChecked,
  required,
}: CheckboxInputProps) {
  return (
    <HorizontalInputContainer>
      <label htmlFor={name}>
        <strong>{label}</strong>
      </label>
      <input
        type="checkbox"
        id={name}
        name={name}
        defaultChecked={defaultChecked}
        required={required}
      />
    </HorizontalInputContainer>
  );
}
