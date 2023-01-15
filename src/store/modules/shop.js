import axios from 'axios'

const state = {
    products: sessionStorage.getItem('products') || {},
    brands: sessionStorage.getItem('brands') || {},
    categories: sessionStorage.getItem('categories') || {},
    category: sessionStorage.getItem('category') || {},
}

const getters = {
    products: state => state.products,
    brands: state => state.brands,
    categories: state => state.categories,
    category: state => state.category,
}

const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products;
    },
    SET_BRANDS(state, brands) {
        state.brands = brands;
    },
    SET_CATEGORIES(state, categories) {
        state.categories = categories;
    },
    SET_CATEGORY(state, category) {
        state.category = category;
    }
}

const actions = {
    async getProducts({ commit }) {
        return new Promise(function(resolve, reject) {
          axios.get('http://localhost:8000/api/v1/shop/products/')
              .then(response => {
                    commit('SET_PRODUCTS', response.data)
                    resolve(response)
              })
              .catch(error => {
                    reject(error)
              });
        })
    },
    async getBrands({ commit }) {
        return new Promise(function(resolve, reject) {
          axios.get('http://localhost:8000/api/v1/shop/brands/')
              .then(response => {
                    commit('SET_BRANDS', response.data)
                    resolve(response)
              })
              .catch(error => {
                    reject(error)
              });
        })
    },
    async getCategories({ commit }) {
        return new Promise(function(resolve, reject) {
            axios.get('http://localhost:8000/api/v1/shop/categories/')
                .then(response => {
                    commit('SET_CATEGORIES', response.data)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        })
    },
    async getProductsByCategory({ commit }, name) {
        return new Promise(function(resolve, reject) {
            axios.get('http://localhost:8000/api/v1/shop/products/get_products_by_category/?category_name=' + name)
                .then(async response => {
                    if (response.data.length > 0) {
                        commit('SET_PRODUCTS', response.data)
                    } else {
                        commit('SET_PRODUCTS', [])
                    }
                    await axios.get('http://localhost:8000/api/v1/shop/categories/by_name/?category_name=' + name)
                        .then((response) => {
                            commit('SET_CATEGORY', response.data[0])
                            resolve(response);
                        })
                        .catch((error) => {
                            commit('SET_CATEGORY', {})
                            reject(error)
                        })
                })
                .catch(error => {
                    commit('SET_PRODUCTS', {})
                    reject(error)
                });
        })
    }
}

export const shop = {
    state,
    getters,
    mutations,
    actions
}
