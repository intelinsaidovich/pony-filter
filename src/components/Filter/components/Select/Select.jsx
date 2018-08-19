import React from "react";
// import * as styled from "./style";

const Select = ({ name, options }) => (
  <select name={name}>
    {options &&
      options.map(o => (
        <option value={o.value} selected={o.selected}>
          {o.text}
        </option>
      ))}
  </select>
);

export default Select;
