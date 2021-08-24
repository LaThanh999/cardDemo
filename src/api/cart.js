import axios from "../plugins/axios";

export default {
  getInfoCart: () => {
    return axios.get("/cart/api/Cart/Info");
  },
  AddProduct: (payload) => {
    return axios.post("/cart/api/Cart/AddProduct", payload);
  },
};
