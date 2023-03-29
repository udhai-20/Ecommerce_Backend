import axios from "axios";
import { base_Url_Prod, config } from "../../Utils/axiox.config";

const getProducts = async () => {
  const res = await axios.get(`${base_Url_Prod}/get`);
  if (res.data) {
    return res.data;
  }
};

const addToWishlists = async (prodId) => {
  const res = await axios.put(`${base_Url_Prod}/wishlist`, { prodId }, config);
  if (res.data) {
    return res.data;
  }
};

export const productService = {
  getProducts,
  addToWishlists,
};
