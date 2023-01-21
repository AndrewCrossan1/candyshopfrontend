import Vue from 'vue'
import Vuex from 'vuex'
import { shop } from './modules/shop'
import { cart } from './modules/cart'
import { auth } from './modules/auth'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// Create a persisted state for the shop module
const PersistedState = createPersistedState({
    storage: window.sessionStorage,
    paths: ['Shop', 'Cart', 'Auth'],
});

export default new Vuex.Store({
  modules: {
      Shop: shop,
      Cart: cart,
      Auth: auth,
  },
  plugins: [PersistedState],
})
