import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Filter from "components/Filter/Filter";
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

    return (
      <Fragment>
        <Filter />
        {items && <Paginator data={items} Component={Card} />}
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    data: state.api.result
  }),
  dispatch => ({
    apiActions: bindActionCreators(actions.apiActions, dispatch)
  })
)(List);
