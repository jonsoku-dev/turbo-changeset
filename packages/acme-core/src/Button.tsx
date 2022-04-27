import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

console.log('core test v4')

export function Button(props: ButtonProps) {
  return <button>{props.children}</button>;
}

Button.displayName = "Button";
