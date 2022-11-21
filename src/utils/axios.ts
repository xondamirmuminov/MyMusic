import Axios from "axios";
import store from "../store";
import { loading } from "../store/actions";

const baseURL = process.env.REACT_APP_API_URL;
const axios = Axios.create({ baseURL, withCredentials: true });

axios.interceptors.request.use((configs: any) => {
  configs.headers["x-rapidapi-key"] = process.env.REACT_APP_API_KEY;
  configs.headers["x-rapidapi-host"] = process.env.REACT_APP_API_HOST;
  return configs;
});

axios.interceptors.request.use((configs) => {
  store.dispatch(loading(true));
  return configs;
});

axios.interceptors.response.use(
  (res) => {
    store.dispatch(loading(false));
    return res;
  },
  (error) => {
    store.dispatch(loading(false));
    return Promise.reject(error);
  }
);

Axios.interceptors.request.use((configs) => {
  store.dispatch(loading(true));
  return configs;
});

Axios.interceptors.response.use(
  (res) => {
    store.dispatch(loading(false));
    return res;
  },
  (error) => {
    store.dispatch(loading(false));
    return Promise.reject(error);
  }
);

export { axios as default };
