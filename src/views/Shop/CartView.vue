<template>
  <div class="container-fluid w-75 my-5 p-3">
    <b-row class="justify-content-center" v-if="this.$store.getters.getNoInCart > 0">
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
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 d-sm-none d-xl-block d-lg-block d-md-block d-none">
              <h3 class="text-bebas-neue text-hot-pink text-lg">Product</h3>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-sm-none d-xl-block d-lg-block d-md-block d-none">

            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 text-center d-sm-none d-xl-block d-lg-block d-md-block d-none">
              <h3 class="text-bebas-neue text-hot-pink text-lg">Quantity</h3>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 d-sm-none d-xl-block d-lg-block d-md-block d-none">
              <h3 class="text-bebas-neue text-hot-pink text-lg">Price</h3>
            </div>
          </b-row>
          <b-row class="px-4 my-2" v-for="{Product, Total, Quantity} in cartItems" v-bind:key="Product.ProductID">
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 d-flex align-items-center justify-content-center">
              <img src="https://picsum.photos/200/200" class="img-fluid rounded-1" alt="Product Image">
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex align-items-center
             justify-content-center my-4">
              <h3 class="text-montserrat text-hot-pink text-center text-sm">{{ Product.Name}}</h3>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex align-items-center
             justify-content-center">
              <button class="btn btn-link text-hot-pink px-2"
                      @click="removeProductFromCart(Product)">
                <b-icon icon="dash"/>
              </button>
              <input min="0" disabled :value="Quantity" type="number" v-bind:id="Product.ProductID"  style="-webkit-appearance: textfield;"
                     class="form-control form-auth w-25 text-center" />
              <button class="btn btn-link text-hot-pink px-2" @click="addProductToCart(Product)">
                <b-icon icon="plus"/>
              </button>
              <br/>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 d-flex align-items-center
            justify-content-center justify-content-xl-start justify-content-md-start justify-content-lg-start my-4">
              <h3 class="text-bebas-neue text-hot-pink text-md">{{ Total | currency }}</h3>
            </div>
          </b-row>
          <b-row>
            <div class="col-12 text-hot-pink text-bebas-neue text-lg py-3 justify-content-xl-start justify-content-lg-start justify-content-center justify-content-md-start justify-content-sm-center">
              <span class="text-center">
                Not Finished?
                <b-link :to="{ name: 'shop' }" class="text-hot-pink">Continue shopping</b-link>
              </span>
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
            <p class="text-montserrat text-sm" v-b-toggle.collapse-instruct @click="rotateCaret">
              Order Instructions
              <b-icon icon="caret-down-fill" id="info-caret"/>
            </p>
            <div class="col-12 text-center">
              <b-collapse id="collapse-instruct">
                <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Enter order instructions here"
                    rows="3"
                    max-rows="6"
                    class="mb-2"
                />
              </b-collapse>
            </div>
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
    <b-row class="text-center d-flex align-items-center justify-content-center" v-else>
        <div class="col-12 w-100">
          <div class="text-bebas-neue text-hot-pink fs-1 text-md-center py-3 d-lg-inline-block d-lg-block d-sm-block">
            <b-icon
                icon="egg-fill"
            />
            <span> Sweetiez</span>
          </div>
        </div>
        <div class="col-12 w-100 text-center">
          <b-icon icon="basket" class="text-hot-pink animate-basket" font-scale="7"/>
        </div>
        <div class="col-12 w-100 text-center">
          <p class="text-xl">Looks like your cart is empty!</p>

        </div>
        <div class="col-12 w-100 text-center">
          <b-form inline>
            <div class="input-group w-25 mx-auto">
              <input class="form-control search-form" type="text" id="example-search-input" v-model="searchData" placeholder="Find another product">
              <span class="input-group-append">
              <button class="btn btn-search rounded-0 search" @click="search()" type="button">
                <b-icon icon="search"/>
              </button>
            </span>
            </div>
          </b-form>
        </div>
        <div class="col-12 w-100 mt-3">
          <b-link :to="{ name: 'home' }" class="btn btn-outline-hot-pink text-montserrat">Go home</b-link>
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
            <ProductCarousel :products="recentlyViewed"/>
          </b-row>
        </b-row>
      </div>
    </b-row>
  </div>
</template>

<script>

import ProductCarousel from "@/components/ProductCarousel";

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
  components: {
    ProductCarousel
  },
  created() {
    this.$watch(
        () => this.$store.getters.getNoInCart,
        () => {
          this.getProductsTotal()
          this.getCartItems()
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
    removeProductFromCart(product) {
      this.$store.commit('REMOVE_PRODUCT', {product: product, quantity: 1})
    },
    rotateCaret() {
      let caret = document.getElementById("info-caret")
      if (caret.classList.contains("rotate")) {
        caret.classList.remove("rotate")
        caret.classList.add("unrotate")
      } else {
        caret.classList.remove("unrotate")
        caret.classList.add("rotate")
      }
    }
  },
}
</script>

<style scoped>
  .rotate {
    transform: rotate(180deg);
    transition: transform 0.15s linear;
  }
  .unrotate {
    transform: rotate(0deg);
    transition: transform 0.15s linear;
  }
  .animate-basket {
    animation: swing 1s infinite;
  }
</style>
