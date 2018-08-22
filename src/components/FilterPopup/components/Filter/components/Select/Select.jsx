import React from "react";

const Select = ({ filter: { init, name, options }, value, changeHandle }) => {
  const onChange = e => {
    const value = e.target.value;
    changeHandle(name, value);
  };

  return (
    <select value={value} name={name} onChange={onChange}>
      <option value="">{init}</option>
      {options.map((option, i) => (
        <option value={option} key={i}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
