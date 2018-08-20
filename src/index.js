import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import FilterPopup from "components/FilterPopup/FilterPopup";
import List from "components/List/List";

import configureStore from "store";
const store = configureStore();

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <Fragment>
        <FilterPopup />
        <List />
      </Fragment>
    </Provider>,
    document.getElementById("root")
  );

render();

if (module.hot) module.hot.accept(render);
