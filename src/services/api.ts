import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.WP_API_URL ?? "https://cms.protmundi.com.br/wp-json/wp/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default api;
