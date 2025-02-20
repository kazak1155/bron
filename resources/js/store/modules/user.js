import axios from "axios";
import router from "../../router/router.js";

export default  {
    namespaced: true,

    state: {
        user: {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
        }
    },

    getters: {
        user: state => {
            return state.user
        },
    },

    mutations: {
        SetUser(state, data) {
            state.user = data;
        }

    },

    actions: {
        async login({ commit }, data) {
            console.log('Данные, полученные из компонента:', data);
            // commit('SetUser', data);

        },

        async registration({ commit }, data) {
            // console.log('Данные, полученные из компонента:', data);
            // console.log('registration');
            const response = await axios.post('api/users', data);
            console.log(response.data)
        },
    },
}
