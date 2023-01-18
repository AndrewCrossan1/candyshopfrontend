<template>
  <carousel :perPage="5" :mouse-drag="true" class="mb-3" :autoplay="true" :touch-drag="true" :paginationEnabled="false">
    <slide v-for="category in categories" :key="category.CategoryID" class="category-pill">
      <b-link class="category-link" :to="{name: 'Products by category', params: {name: category.get_url}}">{{ category.Name}}</b-link>
    </slide>
  </carousel>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "CategoryCarousel",
  props: {
    categories: {
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
