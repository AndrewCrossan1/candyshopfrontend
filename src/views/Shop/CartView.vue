<template>
  <div class="container-fluid w-75 my-5 p-3">
    <b-row class="justify-content-center">
      <!-- Products -->
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 mt-3 mt-sm-3 mt-md-2 mt-lg-0 mt-xl-0">
        <b-row class="justify-content-center p-2">
          <!-- Sorting and View Options -->
          <b-row>
            <div class="cat-heading">
              <h1 class="text-bebas-neue text-hot-pink text-xxl">Your cart</h1>
              <p class="text-montserrat text-hot-pink">{{ productCount | pluralize('item')}}</p>
              <hr/>
            </div>
          </b-row>
          <b-row class="px-4">
            <!-- Cart Headers -->
            <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
              <h3 class="text-bebas-neue text-hot-pink text-lg">Product</h3>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">

            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-center">
              <h3 class="text-bebas-neue text-hot-pink text-lg">Quantity</h3>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
              <h3 class="text-bebas-neue text-hot-pink text-lg">Price</h3>
            </div>
          </b-row>
          <b-row class="px-4 my-2" v-for="{Product, Total, Quantity} in cartItems" v-bind:key="Product.ProductID">
            <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 d-flex align-items-center">
              <img src="https://picsum.photos/200/200" class="img-fluid rounded-1" alt="Product Image">
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 d-flex align-items-center">
              <h3 class="text-montserrat text-hot-pink text-sm">{{ Product.Name}}</h3>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center">
              <button class="btn btn-link text-hot-pink px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                <b-icon icon="dash"/>
              </button>
              <input min="0" :value="Quantity" type="number" v-bind:id="Product.ProductID"  style="-webkit-appearance: textfield;"
                     class="form-control form-auth w-25 text-center" />
              <button class="btn btn-link text-hot-pink px-2" @click="addProductToCart(Product)">
                <b-icon icon="plus"/>
              </button>
              <br/>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 d-flex align-items-center">
              <h3 class="text-bebas-neue text-hot-pink text-md">{{ Total | currency }}</h3>
            </div>
          </b-row>
          <b-row>
            <div class="col-12 text-hot-pink text-bebas-neue text-lg pt-5">
              Not Finished? <b-link :to="{ name: 'shop' }" class="text-hot-pink">Continue shopping</b-link>
            </div>
          </b-row>
        </b-row>
      </div>
      <!-- Filters -->
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 bg-hot-pink text-white me-xl-5 me-lg-2 me-sm-0 me-0 me-md-0 me-0 rounded-2 p-4 sticky-total">
        <b-row>
          <div class="col-6">
            <h3 class="text-bebas-neue mb-3 text-xxl">Total: </h3>
          </div>
          <div class="col-6">
            <h3 class="text-bebas-neue text-end mb-3 text-xxl">{{ total | currency }}</h3>
          </div>
          <div class="col-12 mb-3">
            <b-row class="py-1" v-for="{Name, Price, Quantity} in this.productPrice" v-bind:key="Name">
              <div class="col-8">
                {{ Name }}
              </div>
              <div class="col-4 text-end">
                <div class="col-12">
                  <span class="text-decoration-underline">{{ Price | currency }}</span>
                </div>
                <div class="col-12">
                  x{{ Quantity }}
                </div>
              </div>
            </b-row>
          </div>
          <hr style="background: white; color: white; height: 4px;"/>
        </b-row>
        <b-row>
          <div class="col-12 text-center">
            <p class="text-montserrat text-sm">
              Order Instructions
              <b-icon icon="caret-down-fill"/>
            </p>
          </div>
          <hr style="background: white; color: white; height: 4px;"/>
        </b-row>
        <b-row>
          <div class="col-12 text-center btn-group">
            <b-button class="btn btn-white checkout w-75 text-montserrat mt-auto">Proceed to checkout</b-button>
          </div>
        </b-row>
      </div>
    </b-row>
  </div>
</template>

<script>

export default {
  name: "CartView",
  computed: {
    productCount() {
      return this.$store.getters.getNoInCart
    },
    total() {
      return this.$store.getters.getTotal
    },
    items() {
      return this.$store.getters.getProducts
    },
  },
  created() {
    this.$watch(
        () => this.$store.getters.getNoInCart,
        () => {
          this.getProductsTotal()
        }
    )
  },
  mounted() {
    this.getProductsTotal()
    this.getCartItems()
  },
  data() {
    return {
      productPrice: [],
      cartItems: [],
    }
  },
  filters: {
    pluralize: function (value, plural) {
      if (value === 1) {
        return value + " " + plural;
      } else {
        return value + " " + plural + "s";
      }
    },
    currency(value) {
      let formatter = Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      });
      return formatter.format(value);
    }
  },
  methods: {
    getProductsTotal() {
      let productPrice = [];
      let products = this.$store.getters.getProducts
      for (let i = 0; i < products.length; i++) {
        let float = parseFloat(products[i].item.product.Price) * parseFloat(products[i].item.quantity)
        productPrice.push({Name: products[i].item.product.Name, Price: float.toFixed(2), Quantity: products[i].item.quantity})
      }
      this.productPrice = productPrice
    },
    getCartItems() {
      let cartItems = this.$store.getters.getProducts
      let productPairs = []
      for (let i = 0; i < cartItems.length; i++) {
        let total = parseFloat(cartItems[i].item.product.Price) * parseFloat(cartItems[i].item.quantity)
        productPairs.push({Product: cartItems[i].item.product, Quantity: cartItems[i].item.quantity, Total: total.toFixed(2)})
      }
      this.cartItems = productPairs
    },
    addProductToCart(product) {
      this.$store.commit('ADD_PRODUCT', {product: product, quantity: 1})
    },
  },
}
</script>

<style scoped>

</style>
