import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Card from "./components/Card/Card";
import Paginator from "./components/Paginator/Paginator";

import * as actions from "store/reducer";

export class List extends Component {
  componentDidMount() {
    const { apiActions } = this.props;
    apiActions.getInfo();
  }

  render() {
    const items = this.props.data;

    if (!items) return "загрузка";

    if (items.length === 0)
      return "не найдено ни одного пони. Попробуйте поменять условия";

    return <Paginator data={items} Component={Card} />;
  }
}

export default connect(
  state => ({
    data: state.filter.filteredData
  }),
  dispatch => ({
    apiActions: bindActionCreators(actions.apiActions, dispatch)
  })
)(List);
