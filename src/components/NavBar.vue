<template>
  <div id="navbar" class="sticky-top custom-nav bg-white">
    <b-navbar toggleable="lg" class="p-4 custNav mx-lg-5 mx-md-2 mx-sm-0">
      <!--Right hand side of navbar-->
      <b-navbar-brand class="text-bebas-neue text-hot-pink text-xl text-md-center d-lg-inline-block d-lg-block d-sm-block">
        <b-icon
            icon="egg-fill"
        />
        <span> Sweetiez</span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" class="btn btn-outline-hot-pink" @click="rotateCaret">
        <template #default>
          <b-icon id="nav-caret" icon="chevron-down"/>
        </template>
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item>
            <b-link :to="{ name: 'home' }" :active="$route.name === 'home'" class="nav-link text-hot-pink" tag="a">
              <b-icon
                  icon="house-door-fill"
              />
              Home
            </b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link :to="{ name: 'home' }" :active="$route.name === 'home'" class="nav-link text-hot-pink" tag="a">
              <b-icon
                  icon="gear-fill"
              />
              Sweet Builder
            </b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link :to="{ name: 'home' }" :active="$route.name === 'home'" class="nav-link text-hot-pink" tag="a">
              <b-icon
                  icon="gift-fill"
              />
              Packages
            </b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link :to="{ name: 'products' }" :active="$route.name === 'products'" class="nav-link text-hot-pink" tag="a">
              <b-icon
                  icon="list"
              />
              Products
            </b-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-form inline class="ml-auto">
          <div class="input-group">
            <input class="form-control search-form" type="text" id="example-search-input" v-model="searchData" placeholder="Search the site">
            <span class="input-group-append">
              <button class="btn btn-search rounded-0 px-3 search" @click="search()" type="button">
                <b-icon icon="search"/>
              </button>
            </span>
          </div>
        </b-form>
      </b-collapse>
    </b-navbar>
    <b-container fluid class="mx-0 p-3 bg-hot-pink nav-shadow">
      <b-dropdown v-if="isLoggedIn" variant="none" class="account-drop ml-auto" no-caret>
        <template #button-content>
              <span class="account-drop-text">
                My Account
              <b-icon
                  icon="person-circle"
              />
              </span>
        </template>
        <b-dropdown-item :to="{ name: 'home' }">
          Account Settings
        </b-dropdown-item>
        <b-dropdown-item :to="{ name: 'home' }">
          My Orders
        </b-dropdown-item>
        <b-dropdown-item :to="{ name: 'home' }">
          My Wishlist
        </b-dropdown-item>
        <b-dropdown-divider/>
        <b-dropdown-item @click="logout()">
          Logout
        </b-dropdown-item>
      </b-dropdown>
      <b-button v-else variant="none" :to="{name: 'login'}" class="btn btn-white ml-auto account-drop">
              <span class="account-drop-text">
                Login
              <b-icon
                  icon="person-circle"
              />
              </span>
      </b-button>
      <b-link :to="{name: 'cart'}" class="btn btn-white account-drop float-end">
              <span class="account-drop-text">
                Cart ({{ this.cartLength | pluralize('item') }})
              <b-icon
                  icon="basket-fill"
              />
              </span>
      </b-link>
    </b-container>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters({
          cartLength: 'getNoInCart',
          isLoggedIn: 'isLoggedIn'
        },
    )
  },
  data() {
    return {
      searchData: "",
    };
  },
  methods: {
    search() {
      console.log(this.searchData);
    },
    logout() {
      this.$store.dispatch('logout');
    },
    rotateCaret() {
      let caret = document.getElementById("nav-caret")
      if (caret.classList.contains("rotate")) {
        caret.classList.remove("rotate")
        caret.classList.add("unrotate")
      } else {
        caret.classList.remove("unrotate")
        caret.classList.add("rotate")
      }
    }
  },
  filters: {
    pluralize: function (value, plural) {
      if (value === 1) {
        return value + " " + plural;
      } else {
        return value + " " + plural + "s";
      }
    }
  }
}
</script>

<style scoped>
  .rotate {
    transform: rotate(180deg);
    transition: transform 0.15s linear;
  }
  .unrotate {
    transform: rotate(0deg);
    transition: transform 0.15s linear;
  }
</style>
