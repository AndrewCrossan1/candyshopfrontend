<template>
  <b-container fluid class="w-75 py-xl-5 py-md-1 py-sm-1 py-1 py-lg-3">
    <b-row>
      <!-- Filters -->
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 bg-hot-pink text-white me-xl-5 me-lg-2 me-sm-0 me-0 me-md-0 me-0 rounded-2 p-3">
        <h3 class="text-bebas-neue text-start ms-xl-3 ms-lg-2 ms-md-1 ms-sm-0 ms-0 mb-3 pt-5 text-xxl">Filters</h3>
        <!--
        <div class="accordion">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#collapseOne" @click="spinChevron('Cat');" variant="none" class="text-montserrat btn btn-filter w-100 mb-2" v-b-toggle.collapseOne>
                Categories <b-icon id="chevCat" icon="chevron-down" class="ms-2"></b-icon>
              </b-button>
            </b-card-header>
            <b-collapse id="collapseOne" accordion="my-accordion" role="tabpanel">
              <b-card-body class="text-hot-pink">
                <BrandFilter v-for="category in categories" :key="category.Name" :label="category.Name" :value="category.CategoryID" />
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
        <div class="accordion">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#collapseTwo" @click="spinChevron('Brand');" variant="none" class="text-montserrat btn btn-filter w-100 mb-2" v-b-toggle.collapseTwo>
                Brands <b-icon id="chevBrand" icon="chevron-down" class="ms-2"></b-icon>
              </b-button>
            </b-card-header>
            <b-collapse id="collapseTwo" accordion="my-accordion" role="tabpanel">
              <b-card-body class="text-hot-pink">
                <BrandFilter v-for="brand in brands" :key="brand.Name" :label="brand.Name" :value="brand.BrandID"/>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
        -->
      </div>
      <!-- Products -->
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 mt-3 mt-sm-3 mt-md-2 mt-lg-0 mt-xl-0">
        <b-row class="justify-content-center">
          <!-- Sorting and View Options -->
          <b-row>
            <div class="cat-heading">
              <div v-if="!cat">
                <h1 class="text-bebas-neue text-hot-pink text-xxl">Shop</h1>
                <p class="text-montserrat text-hot-pink">All products</p>
              </div>
              <div v-else>
                <h1 class="text-bebas-neue text-hot-pink">{{ cat.name }}</h1>
                <p class="text-montserrat text-hot-pink">{{ cat.description }}</p>
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
          </b-row>
        </b-row>
        <b-row class="equal-cols" v-if="view === 'list' || view === 'null'">
          <SmallCard :product="product" v-for="product in products" v-bind:key="product.ProductID" :view="view"/>
        </b-row>
        <b-row v-else>
          <SmallCard :product="product" v-for="product in products" v-bind:key="product.ProductID" :view="view"/>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import SelectInput from "@/components/forms/SelectInput";
import SmallCard from "@/components/products/small-card";
//import BrandFilter from "@/components/forms/BrandFilter";
import { mapGetters } from "vuex";


export default {
  name: "ShopView",
  components: {
    //BrandFilter,
    SmallCard,
    SelectInput
  },
  computed: {
    ...mapGetters(["products"]),
    brands: function() {
      return this.$store.getters.brands;
    },
    categories: function() {
      return this.$store.getters.categories;
    },
  },
  async mounted() {
    await this.$store.dispatch("getProducts");
    await this.$store.dispatch("getBrands");
    await this.$store.dispatch("getCategories");
  },
  methods: {
    spinChevron(chev) {
      let chevIcon = document.getElementById(`chev${chev}`);
      if (chevIcon.classList.contains("rotate")) {
        chevIcon.classList.remove("rotate");
      } else {
        chevIcon.classList.add("rotate");
      }
    },
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
    };
  },
}
</script>

<style scoped lang="scss">
$hot-pink: #ff69b4 !default;
$breadcrumb-color: $hot-pink !default;
</style>