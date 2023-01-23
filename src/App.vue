<template>
  <div id="app">
    <!--<TopBar v-if="message">
      <template v-slot:message>
        <div v-html="message"></div>
      </template>
    </TopBar>-->
    <NavBar/>
    <div class="container-fluid w-75">
      <b-breadcrumb class="pt-5" style="--bs-breadcrumb-divider: '>';">
        <b-breadcrumb-item :active="active" :to="path" v-for="{name, path, active} in this.$route.meta.breadcrumb" :key="path">
          {{ name }}
        </b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <router-view/>
    <FooterComponent/>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import FooterComponent from "@/components/FooterComponent";
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

<style scoped lang="scss">
$hot-pink: #FF69B4;

  .bc-active {
    color: $hot-pink !important;
    text-decoration: none !important;
  }
  .breadcrumb-item a {
    color: $hot-pink !important;
    text-decoration: underline !important;
    transition: all 0.2s linear;
  }

  .breadcrumb-item a:hover {
    color: darken($hot-pink, 10%) !important;
    text-decoration: none !important;
  }
  .breadcrumb-item.active {
    color: darken($hot-pink, 10%) !important;
    text-decoration: none !important;
  }
</style>
