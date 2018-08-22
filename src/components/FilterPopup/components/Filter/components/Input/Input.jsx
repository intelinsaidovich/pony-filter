import React from "react";

const Input = ({ text, name, placeholder, changeHandle, value }) => {
  const onChange = e => {
    const target = e.target;
    const value = target.value.match(/[0-9]*/);
    changeHandle(name, value);
  };

  return (
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
