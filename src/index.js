import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import List from "components/List/List";

import configureStore from "store";
const store = configureStore();

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <List />
    </Provider>,
    document.getElementById("root")
  );

render();

if (module.hot) module.hot.accept(render);
