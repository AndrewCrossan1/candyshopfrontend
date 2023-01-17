<template>
  <div class="col-md-12 col-xl-12 w-75 col-sm-12 col-lg-12 mx-auto py-2">
    <h1 class="text-center text-xxl text-hot-pink text-bebas-neue pt-5">
      Create an account
    </h1>
    <p class="text-hot-pink text-sm text-montserrat text-center">
      Create an account for quick access to saved items, order history, your reward points and quicker payment at the checkout.
    </p>
    <div class="form-floating my-4">
      <input type="email" placeholder="Email" v-model="email" name="email" id="email" required class="form-control form-auth">
      <label for="email" class="form-label mb-2">Email</label>
    </div>
    <b-row class="my-4">
      <div class="col-6 form-floating">
        <div class="form-floating">
          <input type="text" placeholder="Forename" v-model="forename" name="forename" id="forename" required class="form-control form-auth">
          <label for="forename" class="form-label mb-2">Forename</label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-floating">
          <input type="surname" placeholder="Surname" v-model="surname" name="surname" id="surname" required class="form-control form-auth">
          <label for="surname" class="form-label mb-2">Surname</label>
        </div>
      </div>
    </b-row>
    <button class="btn btn-outline-hot-pink w-100">
      Create your account
    </button>
    <div class="divider my-4">
      Or sign up with the following
    </div>
    <b-row class="justify-content-center text-center">
      <div class="col-md-4">
        <b-icon icon="facebook" style="color: #3b5998;" font-scale="2"/>
      </div>
      <div class="col-md-4">
        <b-icon icon="google" style="color: red;" font-scale="2"/>
      </div>
      <div class="col-md-4">
        <b-icon icon="twitter" style="color: #00ACEE;" font-scale="2"/>
      </div>
    </b-row>
  </div>
</template>

<script>

export default {
  name: "RegisterForm",
  data() {
    return {
      email: "",
      forename: "",
      surname: "",
      housenum: "",
      street: "",
      zipcode: "",
      city: "",
      result: ""
    }
  },
}
</script>

<style scoped>

</style>
