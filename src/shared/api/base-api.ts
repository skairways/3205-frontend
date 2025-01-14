import axios from "axios";

export const baseURL = "http://localhost:3000/";

const clientApi = axios.create({
  //* use .env file for safety purposes, constant is used as an example
  baseURL,
});

export default clientApi;
