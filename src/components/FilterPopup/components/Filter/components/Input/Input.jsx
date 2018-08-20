import React from "react";

const Input = ({ text, name, placeholder, changeHandle }) => {
  const onChange = e => {
    const target = e.target;
    const value = target.value;

    target.value = value.match(/[0-9]*/);

    changeHandle(e);
  };

  return (
    <input
      type="number"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
