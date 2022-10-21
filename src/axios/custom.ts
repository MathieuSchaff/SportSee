import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000/user"
    : "../user";
const axiosCustomUser = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

export default axiosCustomUser;
