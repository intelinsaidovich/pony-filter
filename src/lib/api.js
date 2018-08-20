import axios from "axios";

const api = axios.create();
const url = "https://api.myjson.com/bins/o8bng";

export const getInfo = () =>
  api
    .get(url)
    .then(r => r.data)
    .catch(r => ({ error: r.response }));
