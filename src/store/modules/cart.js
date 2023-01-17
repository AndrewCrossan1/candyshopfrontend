const state = {
    products: [],
    noInCart: 0,
    total: 0.00,
}

const getters = {
    getTotal: state => state.total,
    getNoInCart: state => state.noInCart,
    getProducts: state => state.products,
}

const mutations = {
    ADD_PRODUCT(state, payload) {
        // Check if product already exists in cart
        for (let i = 0; i < state.products.length; i++) {
            if (state.products[i].item.product.ProductID === payload.product.ProductID) {
                state.products[i].item.quantity += payload.quantity;
                state.noInCart += payload.quantity;
                state.total += parseFloat(payload.product.Price).toFixed(2) * Number(payload.quantity);
                return;
            }
        }
        state.products.push({item: payload});
        state.noInCart += Number(payload.quantity);
        state.total += parseFloat(payload.product.Price).toFixed(2) * Number(payload.quantity);
    },
}

const actions = {
    async addProduct({ commit }, payload) {
        commit('ADD_PRODUCT', payload);
    },
    async removeProduct({ commit }, product) {
        commit('REMOVE_PRODUCT', product);
    }
}

export const cart = {
    state,
    getters,
    mutations,
    actions
}
