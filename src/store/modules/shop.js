import axios from 'axios'

const state = {
    products: sessionStorage.getItem('products') || {},
    brands: sessionStorage.getItem('brands') || {},
    categories: sessionStorage.getItem('categories') || {}
}

const getters = {
    products: state => state.products,
    brands: state => state.brands,
    categories: state => state.categories,
    getProductsByCategory: state => category => {
        return state.products.filter(product => product.category === category)
    },
    getProductsByBrand: state => brand => {
        return state.products.filter(product => product.brand === brand)
    }
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
    SORT_PRODUCTS_BY_PRICE(state) {
        let products = state.products
        products.sort((a, b) => {
            return Number(b.price) - Number(a.price)
        })
        state.products = products
        console.log(products)

    },
    SORT_PRODUCTS_BY_NAME(state) {
        const products = state.products
        products.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
        state.products = products
        console.log(state.products)
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
    sortProducts({ commit }, sort) {
        if (sort === 'pricelth') {
            commit('SORT_PRODUCTS_BY_PRICE')
        } else if (sort === 'name') {
            commit('SORT_PRODUCTS_BY_NAME')
        }
    }
}

export const shop = {
    state,
    getters,
    mutations,
    actions
}