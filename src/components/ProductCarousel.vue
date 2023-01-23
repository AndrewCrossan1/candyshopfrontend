<template>
  <carousel :perPage="5" :mouse-drag="true" class="mb-3" :autoplay="true" :touch-drag="true" :paginationEnabled="false">
    <slide v-for="product in products" :key="product.ProductID" class="category-pill">
      <b-link class="category-link" :to="{name: 'Product', params: {name: product.get_url}}">{{ product.Name}}</b-link>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "CategoryCarousel",
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
    Slide
  },
}
</script>

<style scoped>

</style>
