import React from "react";
import Select from "./components/Select/Select.jsx";

const Filter = () => {
  const filters = [{ name: "kind" }, { name: "color" }];

  return filters.map(f => <Select name={f.name} />);
};

export default Filter;
