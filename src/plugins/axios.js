import axios from "axios";

const baseURL = "https://beta.bluesport.com";
const instance = axios.create({
  baseURL,
});

export default instance;
