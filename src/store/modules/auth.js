import axios from "axios";

const state = {
    status: '',
    token: '',
    user : {}
}

const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user
}

const mutations = {
    auth_request(state){
        state.status = 'loading'
    },
    auth_success(state, token){
        state.status = 'success'
        state.token = token
    },
    auth_error(state){
        state.status = 'error'
    },
    SET_USER(state, user) {
        state.user = user
    },
    logout(state){
        state.status = ''
        state.token = ''
        state.user = {}
    }
}

const actions = {
    async login({commit}, payload){
        return new Promise(function(resolve, reject) {
            commit('auth_request')
            axios.post('http://localhost:8000/api/v1/users/login/', payload)
                .then(response => {
                    const token = response.data.access_token
                    localStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = token
                    commit('auth_success', token)
                    commit('SET_USER', response.data.user);
                    resolve(response)
                })
                .catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },
    logout({commit}){
        return new Promise((resolve) => {
            commit('logout')
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    }
}

export const auth = {
    state,
    getters,
    mutations,
    actions
}
