<template>
  <b-container fluid class="w-75 py-xl-5 py-md-1 py-sm-1 py-1 py-lg-3">
    <b-row>
      <!-- Filters -->
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 bg-hot-pink text-white me-xl-5 me-lg-2 me-sm-0 me-0 me-md-0 me-0 rounded-2 p-3">
        <h3 class="text-bebas-neue text-start ms-xl-3 ms-lg-2 ms-md-1 ms-sm-0 ms-0 mb-3 pt-5 text-xxl">Filters</h3>
        <div class="mb-3 mx-xl-3 mx-lg-2 mx-md-1 mx-sm-0 mx-0">
          <label class="text-montserrat text-md text-decoration-underline fw-bold mb-2">Category</label>
          <b-row v-for="category in categories" v-bind:key="category.CategoryID" class="my-0 p-1 category-filter-item">
            <div class="col-8 text-start">
              <b-link :to="{ name: 'Products by category' , params: {name: category.get_url }}" class="category-filter-text"> {{ category.Name }}</b-link>
            </div>
            <div class="col-4 text-end">
              {{ category.product_count }}
            </div>
          </b-row>
        </div>
      </div>
      <!-- Products -->
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 mt-3 mt-sm-3 mt-md-2 mt-lg-0 mt-xl-0">
        <b-row class="justify-content-center">
          <!-- Sorting and View Options -->
          <b-row>
            <div class="cat-heading">
              <div v-if="!cat && !brand">
                <h1 class="text-bebas-neue text-hot-pink text-xxl">Shop</h1>
                <p class="text-montserrat text-hot-pink">All products</p>
              </div>
              <div v-else-if="cat">
                <h1 class="text-bebas-neue text-hot-pink">{{ cat.Name }}</h1>
                <p class="text-montserrat text-hot-pink">{{ cat.Description }}</p>
              </div>
              <div v-else-if="brand">
                <h1 class="text-bebas-neue text-hot-pink">{{ brand.Name }}</h1>
                <p class="text-montserrat text-hot-pink">{{ brand.Description }}</p>
              </div>
            </div>
            <hr/>
          <!-- Products -->
            <div class="col-md-12 col-12 col-sm-12  col-lg-4 col-xl-4 mb-2 mb-xl-0 mb-lg-0 mb-md-2">
              <label class="text-montserrat text-hot-pink text-xxs">Sort by</label>
              <b-form-select class="form-select select-hot-pink" v-model="sort" @change="sortBy">
                <b-form-select-option value="null" disabled>Select an option</b-form-select-option>
                <b-form-select-option v-for="{value, text} in sortOptions" v-bind:key="value" :value="value">{{ text }}</b-form-select-option>
              </b-form-select>
            </div>
            <div class="col-md-12 col-12 col-sm-12 col-lg-4 col-xl-4 mb-2 mb-xl-0 mb-lg-0 mb-md-2">
              <label class="text-montserrat text-hot-pink text-xxs">View</label>
              <b-form-select class="form-select select-hot-pink" v-model="view">
                <b-form-select-option value="null" disabled>Select an option</b-form-select-option>
                <b-form-select-option v-for="{value, text} in viewOptions" v-bind:key="value" :value="value">{{ text }}</b-form-select-option>
              </b-form-select>
            </div>
            <div class="col-md-12 col-12 col-sm-12 col-lg-4 col-xl-4 mb-2 mb-xl-0 mb-lg-0 mb-md-2">
              <label class="text-montserrat text-hot-pink text-xxs">Products Per Page</label>
              <SelectInput v-model="perPage" :options="perPageOptions" />
            </div>
            <hr class="mt-4 thickness-2"/>
            <CategoryCarousel :categories="categories" />
          </b-row>
        </b-row>
        <b-row class="equal-cols text-center" v-if="view === 'list' || view === 'null'">
          <h1 v-if="products.length <= 0" class="text-bebas-neue text-hot-pink text-xxl py-5">No products found</h1>
          <SmallCard :product="product" v-for="product in products" v-bind:key="product.ProductID" :view="view"/>
        </b-row>
        <b-row v-else class="text-center">
          <h1 v-if="products.length <= 0" class="text-bebas-neue text-hot-pink text-xxl py-5">No products found</h1>
          <SmallCard :product="product" v-for="product in products" v-bind:key="product.ProductID" :view="view"/>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import SelectInput from "@/components/forms/SelectInput";
import SmallCard from "@/components/products/ProductCard";
//import BrandFilter from "@/components/forms/BrandFilter";
import {mapActions} from "vuex";
import CategoryCarousel from "@/components/CategoryCarousel";

export default {
  name: "ShopView",
  components: {
    CategoryCarousel,
    //BrandFilter,
    SmallCard,
    SelectInput
  },
  computed: {
    categories: {
      get() {
        return this.$store.getters.categories;
      },
      set(value) {
        this.$store.commit("SET_CATEGORIES", value);
      }
    },
    products: {
      get() {
        return this.$store.getters.products;
      },
      set(value) {
        this.$store.commit("SET_PRODUCTS", value);
      }
    },
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.getProducts();
      },
      { immediate: true }
    );
  },
  methods: {
    // Method to clear all filters
    sortBy() {
      let products = this.products
      products.sort((a, b) => {
        if (this.sort === "pricelth") {
          return a.Price - b.Price;
        } else if (this.sort === "pricehtl") {
          return b.Price - a.Price;
        } else if (this.sort === "nameaz") {
          return a.Name.localeCompare(b.Name);
        } else if (this.sort === "nameza") {
          return b.Name.localeCompare(a.Name);
        } else if (this.sort === 'rating') {
          return b.Prop_Rating - a.Prop_Rating
        }
      });
      this.$store.state.products = products;
    },
    getProducts() {
      // Get brands
      this.$store.dispatch("getBrands")
          .then(() => {
                this.brands = this.$store.getters.brands;
              }
          ).catch(() => {
                this.$router.push({name: "500"});
              }
          );
      // Get Categories
      this.$store.dispatch("getCategories")
          .then(() => {
                this.categories = this.$store.getters.categories;
              }
          ).catch(() => {
                this.$router.push({name: "500"});
              }
          );
      // Get products by category
      if (this.$route.name === 'Products by category' && this.$route.params.name) {
        this.$store.dispatch('getProductsByCategory', this.$route.params.name)
            .then(() => {
              this.cat = this.$store.getters.category;
              this.products = this.$store.getters.products
            })
            .catch((error) => {
                  if (error.response.status === 404) {
                    this.$router.push({name: "404"});
                  } else {
                    this.$router.push({name: "500"});
                  }
                }
            );
      } else if (this.$route.name === 'Products by brand' && this.$route.params.name) {
        console.log(this.$route.params.name);
        this.getProductsByBrand(this.$route.params.name)
            .then(() => {
              this.brand = this.$store.getters.brand;
              this.products = this.$store.getters.products
            })
            .catch((error) => {
                  if (error.response.status === 404) {
                    this.$router.push({name: "404"});
                  } else {
                    this.$router.push({name: "500"});
                  }
                }
            );
      } else {
        this.$store.dispatch("getProducts")
            .then(() => {
                  this.products = this.$store.getters.products;
                }
            ).catch(() => {
                  this.$router.push({name: "500"});
                }
            );
      }
    },
    // Get the category from the URL and execute vuex action
    ...mapActions(["getProductsByCategory", "getProductsByBrand"]),
  },
  data() {
    return {
      sort: null,
      view: null,
      perPage: null,
      sortOptions: [
        { value: "pricelth", text: "Price (Low to High)" },
        { value: "pricehtl", text: "Price (High to Low)" },
        { value: "nameaz", text: "Name (A-Z)" },
        { value: "nameza", text: "Name (Z-A)" },
        { value: "rating", text: "Rating" },
      ],
      viewOptions: [
        { value: "grid", text: "Grid" },
        { value: "list", text: "List" },
      ],
      perPageOptions: [
        { value: 12, text: "12" },
        { value: 24, text: "24" },
        { value: 36, text: "36" },
      ],
      selectedBrands: [],
      selectedCategories: [],
      cat: null,
      brand: null,
    };
  },
}
</script>

<style scoped lang="scss">
$hot-pink: #ff69b4 !default;
$breadcrumb-color: $hot-pink !default;
.category-filter-item {
  background-color: transparent;
  border-radius: 8px;
  transition: background-color 0.1s linear;
}

.category-filter-active {
  background-color: darken($breadcrumb-color, 5%);

  .category-filter-text {
    text-decoration: underline;
  }
}

.category-filter-text {
  color: white;
  text-decoration: none;
  transition: text-decoration 0.1s linear;
}
.category-filter-item:hover {
  background-color: darken($breadcrumb-color, 5%);

  .category-filter-text {
    text-decoration: underline;
  }
}
</style>
