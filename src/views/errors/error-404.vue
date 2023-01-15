<template>
  <div class="container-fluid w-75 py-5 py-xl-10 text-center d-flex align-items-center justify-content-center">
    <b-row>
      <div class="col-12 w-100">
        <div class="text-bebas-neue text-hot-pink fs-1 text-md-center py-3 d-lg-inline-block d-lg-block d-sm-block">
          <b-icon
              icon="egg-fill"
          />
          <span> Sweetiez</span>
        </div>
      </div>
      <div class="col-12 w-100">
        <b-icon icon="exclamation-triangle" class="text-hot-pink animate__animated animate__shakeX animate__infinite animate__slower" font-scale="7"/>
      </div>
      <div class="col-12 w-100">
        <p class="text-xl">Looks like that page isn't available!</p>

      </div>
      <div class="col-12 w-100">
        <p class="text-lg">Are you sure the page exists?</p>
      </div>
      <div class="col-12 w-100">
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
  </div>
</template>

<script>
export default {
  name: "error-404",
  data() {
    return {
      searchData: "",
    }
  },
  methods: {
    search() {
      console.log(this.searchData)
    }
  }
}
</script>
