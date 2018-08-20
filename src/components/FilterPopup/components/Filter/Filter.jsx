import React, { Component } from "react";

import Select from "./components/Select/Select.jsx";
import Checkbox from "./components/Checkbox/Checkbox.jsx";
import Input from "./components/Input/Input.jsx";

export default class Form extends Component {
  changeHandle = () => {
    this.props.changeHandle(this);
  };

  componentDidMount() {
    this.props.changeHandle(this);
  }

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
          <Input
            name="min"
            placeholder={`от ${price.min}`}
            changeHandle={this.changeHandle}
          />
          <Input
            name="max"
            placeholder={`до ${price.max}`}
            changeHandle={this.changeHandle}
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
