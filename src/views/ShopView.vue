<template>
  <b-container fluid class="w-75 p-5">
    <b-row>
      <!-- Filters -->
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 bg-hot-pink text-white me-5 rounded-2">
        <h3 class="text-bebas-neue text-start ms-xl-3 ms-lg-2 ms-md-1 ms-sm-0 ms-0 mb-3 pt-5 text-xxl">Filters</h3>

        <b-button @click="spinChevron('Brand'); visible = !visible" variant="none" class="text-montserrat ms-xl-3 ms-lg-2 ms-md-1 ms-sm-0 ms-0 mb-3 btn btn-filter">
          Brands <b-icon id="chevBrand" icon="chevron-down" class="ms-2"></b-icon>
        </b-button>
        <b-collapse id="collapseBrand" :visible="visible" class="bg-white text-hot-pink text-montserrat rounded-2 mx-xl-3 ms-lg-2 ms-md-1 ms-sm-0 ms-0 mb-3 p-2">
          <BrandFilter v-for="brand in brands" :key="brand" :label="brand" :value="brand" />
        </b-collapse>
        <b-button @click="clearAll" variant="btn btn-filter" block class="text-montserrat w-100 mx-xl-auto ms-md-1 ms-sm-0 ms-0 mb-3 btn btn-filter">
          Clear all
        </b-button>
      </div>
      <!-- Products -->
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 mt-3 mt-sm-3 mt-md-2 mt-lg-0 mt-xl-0">
        <b-row>
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
              <SelectInput v-model="sort" :options="sortOptions" />
            </div>
            <div class="col-md-12 col-12 col-sm-12 col-lg-4 col-xl-4 mb-2 mb-xl-0 mb-lg-0 mb-md-2">
              <label class="text-montserrat text-hot-pink text-xxs">View</label>
              <SelectInput v-model="view" :options="viewOptions" />
            </div>
            <div class="col-md-12 col-12 col-sm-12 col-lg-4 col-xl-4 mb-2 mb-xl-0 mb-lg-0 mb-md-2">
              <label class="text-montserrat text-hot-pink text-xxs">Products Per Page</label>
              <SelectInput v-model="perPage" :options="perPageOptions" />
            </div>
            <hr class="mt-4 thickness-2"/>
          </b-row>
        </b-row>
        <b-row>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import SelectInput from "@/components/forms/SelectInput";
import BrandFilter from "@/components/forms/BrandFilter";

export default {
  name: "ShopView",
  components: {BrandFilter, SelectInput},
  methods: {
    spinChevron(chev) {
      let chevIcon = document.getElementById(`chev${chev}`);
      if (chevIcon.classList.contains("rotate")) {
        chevIcon.classList.remove("rotate");
      } else {
        chevIcon.classList.add("rotate");
      }
    },
  },
  data() {
    return {
      sort: null,
      view: null,
      perPage: null,
      sortOptions: [
        { value: "price", text: "Price" },
        { value: "name", text: "Name" },
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
      visible: false,
      brands: [
        "Nike",
        "Adidas",
        "Puma",
        "Reebok",
        "New Balance",
        "Asics",
        "Converse",
        "Fila",
        "Under Armour",
        "Skechers",
        "Jordan",
        "Diadora",
        "Kappa",
        "Lacoste",
        "Le Coq Sportif",
        "Onitsuka Tiger",
        "Palladium",
        "Superga",
        "Timberland",
        "Tommy Hilfiger",
        "Umbro",
        "Vans",
      ],
      selectedBrands: [],
    };
  },
}
</script>

<style scoped lang="scss">
$hot-pink: #ff69b4 !default;
$breadcrumb-color: $hot-pink !default;
</style>