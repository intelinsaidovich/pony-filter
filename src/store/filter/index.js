const STATE = {};

const FILTER_DATA = "filter/FILTER_DATA";
const GET_FILTER_OPTIONS = "filter/GET_FILTER_OPTIONS";

export default (state = STATE, { type, data }) => {
  switch (type) {
    case FILTER_DATA:
    case GET_FILTER_OPTIONS:
      return { ...state, ...data };

    default:
      return state;
  }
};

export const filter = inputs => (dispatch, getState) => {
  const api = getState().api;
  const results = api.result;

  let filteredData = results;
  inputs.forEach(({ name, value }) => {
    if (!value) return;
    switch (name) {
      case "min":
        filteredData = filteredData.filter(r => r.price >= value);
        break;
      case "max":
        filteredData = filteredData.filter(r => r.price <= value);
        break;
      default:
        filteredData = filteredData.filter(r => r[name] === value);
    }
  });

  dispatch({
    type: FILTER_DATA,
    data: { filteredData }
  });
};

export const getOptions = results => dispatch => {
  const selectors = [
    { init: "Тип", name: "kind" },
    { init: "Цвет", name: "color" }
  ];

  const filters = selectors.map(({ name, init }) => {
    const options = results
      .map(item => item[name])
      .filter((item, index, self) => self.indexOf(item) === index);
    return { init, name, options };
  });

  const price = results.map(item => item.price).reduce((a, b, index, self) => ({
    min: Math.min(...self),
    max: Math.max(...self)
  }));

  dispatch({
    type: GET_FILTER_OPTIONS,
    data: { filters, price }
  });
};
