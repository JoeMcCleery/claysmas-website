"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  children: ReactNode;

  type?: "button" | "submit";
}

export default function Button({ children, type }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type={type || "button"}
      disabled={type == "submit" && pending}
      className="bg-gray-200 rounded px-4 py-2 transition-colors hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-400 disabled:text-gray-500"
    >
      {children}
    </button>
  );
}
