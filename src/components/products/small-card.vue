<template>
    <div v-if="view === 'grid' || view === null" class="col-md-6 col-12 col-sm-6 col-lg-4 col-xl-3 mb-2 mb-xl-3 mb-lg-2 mb-md-1 d-flex align-items-stretch">
      <b-card class="border-1">
        <b-card-img
            :src="product.Image"
            :alt="product.Name"
            class="img-fluid"
            style="max-width: 100%;"
        />
        <b-card-body class="pt-2 px-0">
          <b-card-title class="text-sm text-center ">
            {{ product.Name}}
          </b-card-title>
          <b-card-text class="text-center">
            {{ product.Price | currency }}
            <b-rating color="#ff69b4" :value="product.Prop_Rating" readonly/>
          </b-card-text>
        </b-card-body>
        <b-card-footer>
          <b-button variant="outline-hot-pink" class="mt-auto w-100">
            Add to cart
          </b-button>
        </b-card-footer>
      </b-card>
    </div>
    <div v-else-if="view === 'list'" class="col-12 my-2">
      <b-card class="overflow-hidden">
        <b-row no-gutters>
          <div class="col-xl-4">
            <b-card-img
                :src="product.Image"
                :alt="product.Name"
                class="img-fluid"
                style="max-width: 100%;"
            />
          </div>
          <div class="col-xl-8">
            <b-card-body class="pt-2 px-0 d-flex align-items-center justify-content-between">
              <b-card-title class="text-sm text-center">
                {{ product.Name}}
                <br/>
                <br/>
                <b-link :to="{ name: 'productsByCategory'}">
                  {{ product.category_name}}
                </b-link>
              </b-card-title>
              <b-card-text class="text-center">
                {{ product.Price | currency }}
                <b-rating color="#ff69b4" class="mt-2" :value="product.Prop_Rating" readonly/>
                ({{ product.Prop_Rating }}/5)
              </b-card-text>
            </b-card-body>
            <b-card-body class="pt-2 px-0 d-flex align-items-center justify-content-between">
              {{ product.Description }}
            </b-card-body>
            <b-card-footer>
              <b-button variant="outline-hot-pink" class="mt-auto w-100">
                Add to cart
              </b-button>
            </b-card-footer>
          </div>
        </b-row>
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
    },
    view: {
      type: String,
      default: null,
    },
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
  data() {
    return {
      price: "",
    }
  }
}
</script>

<style scoped>

</style>