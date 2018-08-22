import React, { Component } from "react";

import Select from "./components/Select/Select.jsx";
import Checkbox from "./components/Checkbox/Checkbox.jsx";
import Input from "./components/Input/Input.jsx";

export default class Filter extends Component {
  render() {
    const { filters, price, changeHandle, inputs } = this.props;
    const getValue = name => {
      const o = inputs.find(input => input.name === name);
      return o ? o.value : "";
    };

    return filters ? (
      <form>
        <div>
          {filters.map((filter, i) => (
            <Select
              key={i}
              changeHandle={changeHandle}
              value={getValue(filter.name)}
              filter={filter}
            />
          ))}
        </div>

        <div>
          {price.map((p, i) => {
            const [name] = Object.keys(p);
            return (
              <Input
                key={i}
                name={name}
                placeholder={p[name]}
                changeHandle={changeHandle}
                value={getValue(name)}
              />
            );
          })}
        </div>

        <div>
          <Checkbox
            text={"новинка"}
            name={"is_new"}
            checked={getValue("is_new")}
            changeHandle={changeHandle}
          />
        </div>
      </form>
    ) : null;
  }
}
