import Vue from 'vue'
import Vuex from 'vuex'
import { shop } from './modules/shop'
import { cart } from './modules/cart'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// Create a persisted state for the shop module
const shopPersistedState = createPersistedState({
    storage: window.sessionStorage,
    paths: ['Shop'],
});

const cartPersistedState = createPersistedState({
    storage: window.sessionStorage,
    paths: ['Cart'],
});


export default new Vuex.Store({
  modules: {
      Shop: shop,
      Cart: cart
  },
  plugins: [shopPersistedState, cartPersistedState],
})
