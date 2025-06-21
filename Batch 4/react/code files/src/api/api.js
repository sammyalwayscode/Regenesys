import axios from "axios";

const API = axios.create({
  baseURL: "https://user-data-ci61.onrender.com/user",
});

export default API;
