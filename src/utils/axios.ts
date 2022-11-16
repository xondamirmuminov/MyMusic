import Axios from "axios";

const baseURL = process.env.API_URL;
const axios = Axios.create({ baseURL, withCredentials: true });

axios.interceptors.request.use((configs: any) => {
  configs.headers["X-RapidAPI-Key"] = process.env.API_KEY;
  configs.headers["X-RapidAPI-Host"] = process.env.API_HOST;
  return configs;
});

export { axios as default };
