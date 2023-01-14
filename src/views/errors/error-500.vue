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
        <p class="text-xl">Oops! An internal error has occurred.</p>

      </div>
      <div class="col-12 w-100">
        <p class="text-lg">Please try again later</p>
      </div>
      <div class="col-12 w-100">
        <b-link :to="{ name: 'home' }" class="btn btn-outline-hot-pink text-montserrat">Go home</b-link>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "error-500",
}
</script>

<style scoped>

</style>
