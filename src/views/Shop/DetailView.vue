<template>
  <div class="container-fluid w-75">
    <b-row class="justify-content-center">
      <div class="col-xl-6 d-flex align-items-center justify-content-center">
        <img :src="product.Image" alt="Product Image" class="img-fluid">
      </div>
      <div class="col-xl-6 align-items-center justify-content-center my-4">
        <h2 class="text-bebas-neue text-hot-pink">{{ product.Name}}</h2>
        <b-row>
          <div class="col-12 text-primary mt-4 text-montserrat text-decoration-underline">
            {{ product.brand_name}}
          </div>
          <div class="col-12 my-2">
            <b-rating :value="product.prop_rating" class="text-warning w-25" readonly>
            </b-rating>
            <span class="text-primary small text-montserrat" v-text="(product.prop_rating === 0) ? product.prop_rating : 'No reviews'"></span>
          </div>
          <div class="col-12 text-montserrat small">
            <span class="text-primary">Description:</span>
            <p class="text-muted">{{ product.Description }}</p>
          </div>
          <hr class="mt-3"/>
        </b-row>
        <b-row>
          <div class="col-12 text-montserrat">
            <b-row>
              <div class="col-2 d-flex align-items-center">
                <span class="text-primary">Price:</span>
              </div>
              <div class="col-9 d-flex align-items-center text-start">
                <span class="text-primary">{{ product.Price | currency }}</span>
              </div>
            </b-row>
            <b-row class="my-3">
              <div class="col-2 d-flex align-items-center">
                <span class="text-primary">Stock: </span>
              </div>
              <div class="col-9 d-flex align-items-center text-start">
                <b-icon icon="circle-fill" v-if="product.Stock > 0" class="text-success"></b-icon>
                <b-icon icon="circle-fill" v-if="product.Stock < 1" class="text-danger"></b-icon>
                <span class="text-success ms-3" v-if="product.Stock > 1">{{ product.Stock }} units left</span>
                <span class="text-danger ms-3" v-if="product.Stock < 1">Out of stock</span>
              </div>
            </b-row>
            <b-row class="my-3" v-if="product.Stock > 0">
              <div class="col-2 d-flex align-items-center">
                <span class="text-primary">Quantity:</span>
              </div>
              <div class="col-9 d-flex align-items-center text-start">
                <button class="btn btn-link text-hot-pink" @click="quantityMinus">
                  <b-icon icon="dash"/>
                </button>
                <input min="1" :max="product.Stock" disabled v-model="quantity" type="number"  style="-webkit-appearance: textfield;"
                       class="form-control w-25 form-auth text-center" />
                <button class="btn btn-link text-hot-pink" @click="quantityPlus">
                  <b-icon icon="plus"/>
                </button>
              </div>
            </b-row>
            <b-row class="py-4">
              <div class="col-6">
                <button @click="addToCart" class="btn btn-hot-pink w-100" v-if="product.Stock > 1">Add to cart</button>
                <button class="btn btn-graphite-gray w-100" v-if="product.Stock < 1" disabled>Out of stock</button>
              </div>
              <div class="col-6">
                <button class="btn btn-outline-hot-pink w-100" v-if="product.Stock > 0">Buy now</button>
              </div>
            </b-row>
          </div>
        </b-row>
      </div>
    </b-row>
    <b-row>
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3 mt-sm-3 mt-md-2 mt-lg-0 mt-xl-0 pt-5">
        <b-row class="justify-content-center p-4">
          <!-- Sorting and View Options -->
          <b-row>
            <div class="cat-heading">
              <h1 class="text-bebas-neue text-hot-pink text-xxl">Recently Viewed Items</h1>
              <p class="text-montserrat text-hot-pink">Take another look at these products you viewed</p>
              <hr/>
            </div>
          </b-row>
          <b-row>
            <!--<ProductCarousel :products="recentlyViewed"/>-->
          </b-row>
        </b-row>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "DetailView",
  mounted() {
    this.$store.dispatch('getProduct', this.$route.params.ProductID).then(() => {
      this.product = this.$store.getters.currentProduct;
    });
  },
  data() {
    return {
      product: {},
      quantity: 1,
    }
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
  components: {
    // ProductCarousel: () => import('@/components/products/ProductCarousel.vue'),
  },
  methods: {
    quantityPlus() {
      if (this.quantity < this.product.Stock)
      this.quantity++;
    },
    quantityMinus() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      this.$store.dispatch('addProduct', {
        product: this.product,
        quantity: this.quantity,
      });
    },
  }
}
</script>

<style scoped>

</style>
