<template>
  <div class="detail-btn">
    <a href="javascript:void(0)" class="btn btn-addcart" style="width: 100%">
      <p
        v-if="product.count === 0 || !product.count"
        class="txt"
        style="width: 300px"
        @click="product.count = +1"
      >
        THÊM VÀO GIỎ
      </p>
      <div v-else class="qtySelector" style="display: flex">
        <span
          class="decreaseQty"
          v-bind:class="{ display: product.count == product.min }"
          @click="clickMinus()"
        ></span>
        <input type="text" v-model="product.count" class="qtyValue" />
        <span
          class="increaseQty"
          v-bind:class="{ display: product.count == product.max }"
          @click="clickPlus()"
        ></span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data: () => ({
    product: {
      count: null,
      min: null,
      max: null,
    },
  }),
  watch: {
    "product.count"() {
      //console.log(value); // or call API send $emit
    },
  },
  mounted() {
    const { count, min, max } = window.dataProduct;
    this.product.count = count;
    this.product.min = min;
    this.product.max = max;
  },
  methods: {
    clickMinus() {
      if (this.product.count > this.product.min) this.product.count -= 1; // or call API send $emit
    },
    clickPlus() {
      if (this.product.count < this.product.max) this.product.count += 1; // or call API send $emit
    },
  },
};
</script>

<style lang="scss">
.display {
  visibility: hidden !important;
}
</style>
