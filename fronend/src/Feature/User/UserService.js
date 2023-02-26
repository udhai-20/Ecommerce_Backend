import axios from "axios";

const register = async (userdata) => {
  const res = await axios.post("", userdata);
  if (res.data) {
    return res.data;
  }
};

export const authService = {
  register,
};
