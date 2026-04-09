import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="container1140 bg-blue-100 flex flex-col items-center justify-center">{children}</div>;
}