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
    open: false,
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

  changeHandle = f => {
    const form = ReactDOM.findDOMNode(f);
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

    this.setState({ inputs });
  };

  openPopup = e => {
    e.preventDefault();
    this.setState({ open: true });
  };

  closePopup = () => {
    this.setState({ open: false });
  };

  filter = () => {
    const { filterActions } = this.props;
    const { inputs } = this.state;
    this.closePopup();
    filterActions.filter(inputs);
  };

  render() {
    const { filters, price, filterActions } = this.props;
    const { open } = this.state;

    return ReactDOM.createPortal(
      <Fragment>
        <div onClick={this.openPopup}>{linkText}</div>
        {open && (
          <Popup close={this.closePopup} filter={this.filter}>
            <Filter
              changeHandle={this.changeHandle}
              filters={filters}
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
