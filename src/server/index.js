import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:4000",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Credentials": "true",
  },
  withCredentials: true,
});

api.defaults.withCredentials = true;

export { api };
