import React, { Component } from "react";
import ReactDOM from "react-dom";

import Select from "./components/Select/Select.jsx";
import Checkbox from "./components/Checkbox/Checkbox.jsx";

export default class Form extends Component {
  changeHandle = e => {
    const { filterActions } = this.props;
    const form = ReactDOM.findDOMNode(this);
    const inputs = [];

    for (let i = 0; i < form.length; i++) {
      const self = form[i];
      let { value, name, nodeName, type } = self;
      const tag = nodeName.toLowerCase();

      if (tag === "select") {
        const index = self.options.selectedIndex;
        value = index === 0 ? null : self.value;
      }

      if (type === "checkbox") {
        value = self.checked ? true : false;
      }

      inputs.push({ value, name });
    }
    filterActions.filter(inputs);
  };

  render() {
    const { filters, price } = this.props;
    return filters ? (
      <form>
        <div>
          {filters.map(filter => (
            <Select changeHandle={this.changeHandle} filter={filter} />
          ))}
        </div>

        <div>
          <input
            type="number"
            name="min"
            min={price.min}
            onChange={this.changeHandle}
            placeholder={price.min}
          />
          <input
            type="number"
            name="max"
            onChange={this.changeHandle}
            placeholder={price.max}
          />
        </div>
        <div>
          <Checkbox
            text={"новинка"}
            name={"is_new"}
            changeHandle={this.changeHandle}
          />
        </div>
      </form>
    ) : null;
  }
}
