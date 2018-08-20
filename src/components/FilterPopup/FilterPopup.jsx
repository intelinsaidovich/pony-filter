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
    open: false
  };

  el = document.createElement("div");

  componentDidMount() {
    modalRoot.innerHTML = "";
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  openPopup = () => {
    this.setState({ open: true });
  };

  closePopup = () => {
    this.setState({ open: false });
  };

  render() {
    const { filters, price, filterActions } = this.props;
    const { open } = this.state;
    return ReactDOM.createPortal(
      <Fragment>
        <a onClick={this.openPopup}>{linkText}</a>
        <Popup isVisible={open} close={this.closePopup}>
          <Filter
            changeHandle={this.changeHandle}
            filters={filters}
            price={price}
            filterActions={filterActions}
          />
        </Popup>
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
