<template>
    <b-container size="md" class="py-xl-7">
      <b-row>
        <div class="col-md-12 col-12 col-sm-12 col-lg-6 col-xl-6 d-flex align-items-center justify-content-center p-3">
          <img :src="this.image" class="img-fluid" alt="E-Commerce Image"/>
        </div>
        <div class="col-md-12 col-12 col-sm-12 col-lg-6 col-xl-6 align-items-center justify-content-center p-3 shadow shadow-md rounded-2">
          <div class="btn-group w-100 pt-3">
            <b-link class="btn btn-outline-hot-pink" :active="this.$route.name === 'login'" active-class="activeAuth" :to="{name: 'login'}">Login</b-link>
            <b-link class="btn btn-outline-hot-pink" :active="this.$route.name === 'register'" active-class="activeAuth" :to="{name: 'register'}">Register</b-link>
          </div>
          <LoginForm v-if="this.$route.name === 'login'"/>
          <RegisterForm v-else-if="this.$route.name === 'register'"/>
        </div>
      </b-row>
    </b-container>
</template>

<script>
import LoginForm from "@/components/forms/Auth/LoginForm";
import RegisterForm from "@/components/forms/Auth/RegisterForm";
export default {
  name: "AuthView",
  components: {LoginForm, RegisterForm},
  data() {
    return {
      image: require('../assets/images/web-shopping.svg')
    }
  },
}
</script>

<style scoped>

</style>
