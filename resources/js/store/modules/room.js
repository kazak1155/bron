import axios from "axios";

export default  {
    namespaced: true,

    state: {
        rooms: null,
        message: null,
        isVisible: false,
        classMessage: null,
    },

    getters: {
        rooms:  state => {
            return state.rooms
        },
    },

    mutations: {
        setRooms(state, rooms) {
            state.rooms = rooms
        },
    },

    actions: {
        getRoomsInHotel({ commit, state }, id) {
            axios.get("/api/room")
                .then(response => {
                    commit('setRooms', response.data)
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error.message)
                });
        },
    },
}
