<template>
    <div class="col-md-12 col-xl-12 w-75 col-sm-12 col-lg-12 mx-auto py-2">
      <h1 class="text-center text-xxl text-hot-pink text-bebas-neue pt-5">
        Login to your account
      </h1>
      <p class="text-hot-pink text-sm text-montserrat text-center">
        Login to your account for quick access to saved items, order history, your reward points and quicker payment at the checkout.
      </p>
      <div class="form-floating my-4">
        <input type="text" placeholder="Username" v-model="username" name="username" id="username" required class="form-control form-auth">
        <label for="username" class="form-label mb-2">Username</label>
      </div>
      <div class="form-floating my-4">
        <input type="password" placeholder="Password" v-model="password" name="password" id="password" required class="form-control form-auth">
        <label for="password" class="form-label mb-2">Password</label>
      </div>
      <button class="btn btn-outline-hot-pink w-100">
        Login
      </button>
      <div class="divider my-4">
        Or sign in with the following
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
  name: "LoginForm",
  data() {
    return {
      username: '',
      password: '',
    };
  },
  mounted() {
  },
}
</script>

<style scoped>

</style>
