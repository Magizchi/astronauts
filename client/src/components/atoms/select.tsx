import React, { FunctionComponent } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string }[];
}

const Select: FunctionComponent<SelectProps> = ({ label = "Select default", options = [], ...props }) => {
  return (
    <>
      <label htmlFor="selectID" className="text-blue-700">
        {label}
      </label>
      <select
        className="h-10 p-2 bg-transparent border-2 text-blue-700 border-blue-600 placeholder:text-blue-600 rounded-md"
        id="selectID"
        {...props}
      >
        <Option value="" label="Select a planet" className="text-gray-400" disabled selected />
        {options.map((option) => (
          <Option key={option.value} value={option.value} label={option.label} />
        ))}
      </select>
    </>
  );
};

export default Select;

interface OptionsProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  label: string;
}

const Option: FunctionComponent<OptionsProps> = ({ value, label, ...props }) => (
  <option className="text-blue-700 bg-white" value={value} {...props}>
    {label}
  </option>
);
