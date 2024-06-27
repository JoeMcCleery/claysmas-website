import { ReactNode } from "react";

interface VerticalInputContainerProps {
  children: ReactNode;
}

export default function VerticalInputContainer({
  children,
}: VerticalInputContainerProps) {
  return <div className="grid">{children}</div>;
}
