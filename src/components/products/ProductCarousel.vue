<template>
  <carousel :perPage="5" :mouse-drag="true" class="mb-3" :autoplay="true" :touch-drag="true" :paginationEnabled="false">
    <slide v-for="product in products" :key="product.ProductID" class="category-pill">
      <RecentlyViewedProduct :product="product" />
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import RecentlyViewedProduct from './RecentlyViewedProduct.vue';

export default {
  name: "ProductCarousel",
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      category: null
    };
  },
  components: {
    Carousel,
    Slide,
    RecentlyViewedProduct,
  },
}
</script>

<style scoped>

</style>
