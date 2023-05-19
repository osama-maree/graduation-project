import axios from "axios";

export const api = (token) =>
  axios.create({
    baseURL: "http://localhost:3000/api/v1/tabo", // Set your API base URL
    headers: {
      token: `osama__${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
