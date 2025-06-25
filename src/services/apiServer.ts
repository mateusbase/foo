import axios from "axios";

const apiServer = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.PAGE_API_TOKEN!,
  },
});

export default apiServer;
