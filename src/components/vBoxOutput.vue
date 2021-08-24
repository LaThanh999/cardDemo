<template>
  <span class="btn btn-addcart" style="width: 100%">
    <p
      v-if="count == 0 || !count"
      class="txt"
      style="width: 300px"
      @click="clickPlus()"
    >
      THÊM VÀO GIỎ
    </p>
    <div v-else class="qtySelector" style="display: flex">
      <span
        class="decreaseQty"
        v-bind:class="{ display: count == min }"
        @click="clickMinus()"
      ></span>
      <input type="text" v-model="count" class="qtyValue" />
      <span
        class="increaseQty"
        v-bind:class="{ display: count == max }"
        @click="clickPlus()"
      ></span>
    </div>
  </span>
</template>

<script>
export default {
  data: () => ({
    count: null,
    min: 0,
    max: null,
    product: {
      ProductId: null,
      ProductCode: "",
      ProductType: null,
      IsOwQuantity: false,
      IsCoupleWatch: false,
      IndexGiftAdds: [],
    },
    RequestChooseServiceDetail: {
      IsTransContact: false,
      IsUserManual: false,
      ProductId: 123,
      LstProductCodeMoreColors: "",
      BringProductsName: "",
    },
  }),
  mounted() {
    const { items_count, items_detail } = window.cart;
    this.product = { ...window.product };
    this.count = items_count;
    this.max = items_detail[0]?.maxQuantity;
  },
  methods: {
    clickMinus() {
      this.product.Quantity = -1;
      this.product.ProductCode = this.product.ProductCode.toString();
      const data = {
        RequestProductAdd: [{ ...this.product }],
        RequestChooseServiceDetail: this.RequestChooseServiceDetail,
      };
      if (this.count > this.min) {
        this.api
          .AddProduct(data)
          .then(({ data }) => {
            if (data.code != 0) {
              alert(data.message);
              return;
            }
            this.count -= 1;
            console.log(data);
            window.GetQuanatyCart(this.count);
          })
          .catch((err) => {
            console.log(err.response.errormessage);
          });
      }
    },
    clickPlus() {
      this.product.Quantity = 1;
      this.product.ProductCode = this.product.ProductCode.toString();
      const data = {
        RequestProductAdd: [{ ...this.product }],
        RequestChooseServiceDetail: this.RequestChooseServiceDetail,
      };
      if (this.count < this.max) {
        this.api
          .AddProduct(data)
          .then(({ data }) => {
            if (data.code != 0) {
              alert(data.message);
              return;
            }
            this.count += 1;
            console.log(data);
            window.GetQuanatyCart(this.count);
          })
          .catch((err) => {
            console.log("errr");
            console.log(err.response);
          });
      }
    },
  },
};
</script>

<style lang="scss">
.display {
  visibility: hidden !important;
}
</style>
