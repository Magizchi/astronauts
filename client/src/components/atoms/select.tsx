import React, { FunctionComponent } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string }[];
}

const Select: FunctionComponent<SelectProps> = ({ label = "Select default", options = [], ...props }) => {
  return (
    <>
      <label htmlFor="selectID">{label}</label>
      <select
        className="h-10 p-2 bg-transparent border-2 border-white placeholder:text-white rounded-md"
        id="selectID"
        {...props}
      >
        <Option value="" label="Choisir" />
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

const Option: FunctionComponent<OptionsProps> = ({ value, label }) => (
  <option className="text-white" value={value}>
    {label}
  </option>
);
