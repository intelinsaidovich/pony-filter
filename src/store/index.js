import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

const middleware = [thunk];
const enhancedCompose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = enhancedCompose(applyMiddleware(...middleware));

const configureStore = () => {
  const store = createStore(reducer, enhancer);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./reducer", () => {
        store.replaceReducer(reducer);
      });
    }
  }

  return store;
};

export default configureStore;
