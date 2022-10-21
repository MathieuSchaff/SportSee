import axios from "axios";
import { useNavigate } from "react-router-dom";

console.log(import.meta.env);

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000/user"
    : "../user";
const axiosCustomUser = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
  validateStatus: function (status) {
    return status < 300; // Resolve only if the status code is less than 500
  },
});

export default axiosCustomUser;
