import cart from "./cart.js";
import Vue from "vue";

const data = {
  ...cart,
};

Vue.prototype.api = data;
