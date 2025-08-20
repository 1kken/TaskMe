import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://TaskMe.test";

export default axios;