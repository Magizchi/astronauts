import React, { FunctionComponent } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}
const Input: FunctionComponent<InputProps> = ({ title, ...props }) => (
  <label htmlFor="inputID" className="flex flex-col pb-5 text-blue-700">
    {title}
    <input
      id="inputID"
      className="h-10 p-2 bg-transparent border-2 border-blue-600 placeholder:text-gray-300 rounded-md focus:border-green-900 outline-none"
      {...props}
    />
  </label>
);

export default Input;
