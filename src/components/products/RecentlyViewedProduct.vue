<template>
  <div class="col-md-6 col-12 col-sm-6 col-lg-4 col-xl-2 mb-2 mb-xl-3 mb-lg-2 mb-md-1 d-flex align-items-stretch">
    <b-card class="border-0 p-2 shadow shadow-md">
      <b-card-img
          :src="product.Image"
          :alt="product.Name"
          class="img-fluid"
          style="max-width: 100%;"
      />
      <b-card-body class="pt-2 px-0">
        <b-card-title class="text-sm text-center ">
          {{ product.Name}}
        </b-card-title>
        <b-row>
          <div class="col-6">
            {{ product.Price | currency }}
          </div>
          <div class="col-6">
            {{ product.Prop_Rating }} <b-icon icon="star-fill"/>
          </div>
        </b-row>
      </b-card-body>
      <b-input-group>
        <b-input type="number" v-model="quantity"/>
        <b-button variant="outline-hot-pink" class="mt-auto" @click="addToCart">
          Add to cart
        </b-button>
      </b-input-group>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "RecentlyViewedProduct",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  filters: {
    currency(value) {
      let formatter = Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      });
      return formatter.format(value);
    }
  },
  data() {
    return {
      price: "",
      quantity: 1,
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addProduct', {
        product: this.product,
        quantity: this.quantity,
      });
    },
  },
}
</script>

<style scoped>

</style>
