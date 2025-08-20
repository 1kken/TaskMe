import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://backend.test";

export default axios;