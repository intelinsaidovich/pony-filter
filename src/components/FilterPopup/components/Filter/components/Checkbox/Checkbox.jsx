import React, { Fragment } from "react";

const Checkbox = ({ text, name, changeHandle }) => (
  <Fragment>
    <input name={name} type="checkbox" id={name} onChange={changeHandle} />
    <label htmlFor={name}>{text}</label>
  </Fragment>
);

export default Checkbox;
