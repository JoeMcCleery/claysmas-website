import { ReactNode } from "react";

interface HorizontalInputContainerProps {
  children: ReactNode;
}

export default function HorizontalInputContainer({
  children,
}: HorizontalInputContainerProps) {
  return <div className="flex gap-x-1">{children}</div>;
}
