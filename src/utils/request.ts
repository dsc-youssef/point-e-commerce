// Axios
import axios from "axios";

// Config
import REQUEST from "@/config/request";

const request = axios.create({
  baseURL: REQUEST.request_url,
});

export default request;