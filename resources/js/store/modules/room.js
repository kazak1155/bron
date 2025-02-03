import axios from "axios";

export default  {
    namespaced: true,

    state: {
        rooms: null,
        room: {
            id: null,
            name: null,
            description: null,
            price: null,
            hotel_id: null,
        },
    },

    getters: {
        rooms:  state => {
            return state.rooms
        },
        room: state => {
            return state.room
        }
    },

    mutations: {
        setRooms(state, rooms) {
            state.rooms = rooms
        },
        setRoom(state, room) {
            state.room = room
        }
    },

    actions: {
        getRoomsInHotel({ commit, state }, id) {
            axios.get(`/api/rooms/${id}`)
                .then(response => {
                    commit('setRooms', response.data)
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error.message)
                });
        },

        getOneRoom({commit}, id) {
            axios.get(`/api/room/${id}`)
                .then(response => {
                    commit('setRoom', response.data.data)
                    console.log(response.data.data)
                })
                .catch(error => {
                    console.log(error.message)
                });
        }
    },
}
