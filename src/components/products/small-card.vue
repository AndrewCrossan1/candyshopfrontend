<template>
  <div>
    <b-card class="border-1">
      <b-card-img
          :src="product.image"
          :alt="product.name"
          class="img-fluid"
          style="max-width: 100%; max-height: 150px;"
      />
      <b-card-body>
        <b-card-title class="text-sm text-center">
          {{ product.name }}
        </b-card-title>
        <b-card-text class="text-center">
          {{ product.price }}
        </b-card-text>
        <b-card-text>
          <b-rating color="#ff69b4" :value="product.rating" readonly/>
        </b-card-text>
      </b-card-body>
      <b-card-footer>
        <b-button variant="outline-hot-pink" class="w-100">
          Add to cart
        </b-button>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "small-card",
  props: {
    product: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>