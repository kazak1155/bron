import axios from "axios";
import router from "../../router/router.js";

export default  {
    namespaced: true,

    state: {
        user: {
            name: null,
            email: null,
            password: null,
            confirm_password: null,
        }
    },

    getters: {
        user: state => {
            return state.user
        },
    },

    mutations: {

    },

    actions: {
        async login() {
            console.log('login');
        },

        async registration() {
            console.log('registration');
        },
    },
}
