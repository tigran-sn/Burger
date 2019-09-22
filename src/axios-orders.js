import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-b9f97.firebaseio.com/"
});
export default instance;
