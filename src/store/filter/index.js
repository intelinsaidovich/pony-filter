import * as api from "lib/api";

const STATE = {};

const GET_DATA = "api/GET_DATA";

export default (state = STATE, { type, data }) => {
  switch (type) {
    case GET_DATA:
      return { ...state, ...data };

    default:
      return state;
  }
};

export const getInfo = () => async dispatch => {
  const result = await api.getInfo();

  dispatch({
    type: GET_DATA,
    data: { result }
  });
};
