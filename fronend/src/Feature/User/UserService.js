import axios from "axios";
import { base_Url_Users } from "../../Utils/axiox.config";

const register = async (userdata) => {
  const res = await axios.post(`${base_Url_Users}/register`, userdata);
  if (res.data) {
    return res.data;
  }
};
const login = async (userdata) => {
  const res = await axios.post(`${base_Url_Users}/login`, userdata);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
    return res.data;
  }
};

export const authService = {
  register,
  login,
};
