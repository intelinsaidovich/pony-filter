import React from "react";

const Select = ({ filter: { init, name, options }, changeHandle }) => (
  <select name={name} onChange={changeHandle}>
    <option>{init}</option>
    {options.map((option, i) => (
      <option value={option} key={i}>
        {option}
      </option>
    ))}
  </select>
);

export default Select;
