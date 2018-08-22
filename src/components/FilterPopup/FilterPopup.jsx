import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactDOM from "react-dom";

import Popup from "./components/Popup/Popup.jsx";
import Filter from "./components/Filter/Filter.jsx";

import * as actions from "store/reducer";

const modalRoot = document.getElementById("open_popup");
const linkText = modalRoot.textContent;

class FilterPopup extends Component {
  state = {
    isOpen: false,
    inputs: []
  };

  el = document.createElement("div");

  componentDidMount() {
    modalRoot.innerHTML = "";
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  changeHandle = (name, value) => {
    const inputs = this.state.inputs;
    const self = inputs.find(i => i.name === name);
    const newInputs = self
      ? inputs.map(input => (input.name === name ? { name, value } : input))
      : [...inputs, { name, value }];

    this.setState({ inputs: newInputs });
  };

  openPopup = e => {
    e.preventDefault();
    this.setState({ isOpen: true });
  };

  closePopup = () => {
    this.setState({ isOpen: false });
  };

  filter = () => {
    const { filterActions } = this.props;
    const { inputs } = this.state;
    this.closePopup();
    filterActions.filter(inputs);
  };

  render() {
    const { filters, price, filterActions } = this.props;
    const { isOpen, inputs } = this.state;

    return ReactDOM.createPortal(
      <Fragment>
        <div onClick={this.openPopup}>{linkText}</div>
        {isOpen && (
          <Popup close={this.closePopup} filter={this.filter}>
            <Filter
              changeHandle={this.changeHandle}
              filters={filters}
              inputs={inputs}
              price={price}
              filterActions={filterActions}
            />
          </Popup>
        )}
      </Fragment>,
      this.el
    );
  }
}

export default connect(
  state => ({
    filters: state.filter.filters,
    price: state.filter.price
  }),
  dispatch => ({
    filterActions: bindActionCreators(actions.filterActions, dispatch)
  })
)(FilterPopup);
