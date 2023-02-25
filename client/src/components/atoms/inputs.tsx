import React, { FunctionComponent } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}
const Input: FunctionComponent<InputProps> = ({ title, ...props }) => (
  <label htmlFor="inputID" className="flex flex-col pb-5">
    {title}
    <input
      id="inputID"
      className="h-10 p-2 bg-transparent border-2 border-white placeholder:text-white rounded-md focus:border-green-900 outline-none"
      {...props}
    />
  </label>
);

export default Input;
