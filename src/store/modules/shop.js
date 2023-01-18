import axios from 'axios'

const state = {
    products: {},
    brands: {},
    categories: {},
    category: {},
    brand: {},
    newProducts: {},
}

const getters = {
    products: state => state.products,
    brands: state => state.brands,
    categories: state => state.categories,
    category: state => state.category,
    brand: state => state.brand,
    newProducts: state => state.newProducts,
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
    },
    SET_BRAND(state, brand) {
        state.brand = brand;
    },
    SET_NEW_PRODUCTS(state, newProducts) {
        state.newProducts = newProducts;
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
    },
    async getProductsByBrand({ commit }, name) {
        return new Promise(function(resolve, reject) {
            axios.get('http://localhost:8000/api/v1/shop/products/get_products_by_brand/?brand_name=' + name)
                .then(async response => {
                    if (response.data.length > 0) {
                        commit('SET_PRODUCTS', response.data)
                    } else {
                        commit('SET_PRODUCTS', [])
                    }
                    await axios.get('http://localhost:8000/api/v1/shop/brands/by_name/?brand_name=' + name)
                        .then((response) => {
                            commit('SET_BRAND', response.data[0])
                            resolve(response);
                        })
                        .catch((error) => {
                            commit('SET_BRAND', {})
                            reject(error)
                        })
                })
                .catch(error => {
                    commit('SET_PRODUCTS', {})
                    reject(error)
                });
        })
    },
    async getNewProducts({ commit }) {
        return new Promise(function(resolve, reject) {
            axios.get('http://localhost:8000/api/v1/shop/products/get_new_products/')
                .then(response => {
                    commit('SET_NEW_PRODUCTS', response.data)
                    resolve(response)
                })
                .catch(error => {
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
