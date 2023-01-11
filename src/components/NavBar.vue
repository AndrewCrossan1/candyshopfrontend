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
        <b-navbar-toggle target="nav-collapse" class="btn btn-outline-hot-pink">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-up"/>
            <b-icon v-else icon="chevron-down"/>
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
        <b-button v-else variant="none" to="#" class="btn btn-white ml-auto account-drop">
              <span class="account-drop-text">
                Login
              <b-icon
                  icon="person-circle"
              />
              </span>
        </b-button>
        <b-link to="#" class="btn btn-white account-drop float-end">
              <span class="account-drop-text">
                Cart (0 items)
              <b-icon
                  icon="basket-fill"
              />
              </span>
        </b-link>
      </b-container>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      searchData: "",
      isLoggedIn: false,
    };
  },
  methods: {
    search() {
      console.log(this.searchData);
    },
    checkDebug() {
      if (process.env.NODE_ENV === "development") {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = undefined;
      }
    }
  },
  mounted() {
    this.checkDebug();
  },
}
</script>