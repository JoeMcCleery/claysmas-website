"use client";

import VerticalInputContainer from "./VerticalInputContainer";

interface RadioInputProps {
  name: string;
  label: string;
  options: { value: string; label: string; defaultChecked?: boolean }[];

  required?: boolean;
}

export default function RadioInput({
  name,
  label,
  options,
  required,
}: RadioInputProps) {
  return (
    <VerticalInputContainer>
      <p>
        <strong>{label}</strong>
      </p>
      {options.map((option) => {
        const elementId = `${name}-${option.value}`;
        return (
          <div
            key={elementId}
            className="flex gap-1"
          >
            <input
              type="radio"
              id={elementId}
              name={name}
              value={option.value}
              defaultChecked={option.defaultChecked}
              required={required}
            />
            <label htmlFor={elementId}>{option.label}</label>
          </div>
        );
      })}
    </VerticalInputContainer>
  );
}
