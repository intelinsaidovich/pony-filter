import { combineReducers } from "redux";

import api from "./api";
import filter from "./filter";

import * as apiActions from "./api";
import * as filterActions from "./filter";

export { apiActions, filterActions };

export default combineReducers({
  api,
  filter
});
