<template>
  <div id="app">
    <!--<TopBar v-if="message">
      <template v-slot:message>
        <div v-html="message"></div>
      </template>
    </TopBar>-->
    <NavBar/>
    <router-view/>
    <footer-component/>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import FooterComponent from "@/components/footer-component";
//import TopBar from "@/components/TopBar";
export default {
  components: {
    FooterComponent,
    NavBar,
    //TopBar
  },
  data() {
    return {

    };
  },
  computed: {
    message: function () {
      return '<p class="text-white text-montserrat w-100 text-center mb-0"> ' +
          '<b-icon icon="bag-fill"/><span class="text-decoration-underline">Attention!</span>  50% off on orders over £50 to celebrate the opening of our new store. ' +
          '<a href="#" class="text-white text-decoration-underline">Shop now!</a> ' +
          '</p>';
    }
  },

}
</script>