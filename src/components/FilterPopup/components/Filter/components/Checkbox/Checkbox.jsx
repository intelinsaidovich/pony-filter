import React, { Fragment } from "react";

const Checkbox = ({ text, name, changeHandle, checked }) => {
  const onChange = e => {
    const value = e.target.checked ? true : false;
    changeHandle(name, value);
  };

  return (
    <Fragment>
      <input
        name={name}
        checked={checked}
        type="checkbox"
        id={name}
        onChange={onChange}
      />
      <label htmlFor={name}>{text}</label>
    </Fragment>
  );
};

export default Checkbox;
