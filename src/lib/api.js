import axios from "axios";

const api = axios.create();
const data = "https://api.myjson.com/bins/jzi3w";

export const getInfo = query =>
  api
    .get(data, { params: { query } })
    .then(r => r.data)
    .catch(r => ({ error: r.response }));
