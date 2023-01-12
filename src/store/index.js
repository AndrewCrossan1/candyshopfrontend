import Vue from 'vue'
import Vuex from 'vuex'
import { shop } from './modules/shop'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// Create a persisted state for the shop module
const shopPersistedState = createPersistedState({
    paths: ['shop'],
});


export default new Vuex.Store({
  modules: {
    Shop: shop,
  },
  plugins: [shopPersistedState],
})
