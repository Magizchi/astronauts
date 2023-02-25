import React, { FunctionComponent } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => <button {...props}>{children}</button>;

export default Button;
