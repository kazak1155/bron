import axios from "axios";

export default  {
    namespaced: true,

    state: {
        rooms: null,
        imageUrl:null,
        selectedHotel: null,
        hotels: [],
        room: {
            id: null,
            name: null,
            description: null,
            price: null,
            hotel_id: null,
            image_url: null,
        },
    },

    getters: {
        rooms:  state => {
            return state.rooms
        },
        room: state => {
            return state.room
        },
        imageUrl: state => {
            return state.imageUrl
        },
        selectedHotel: state => {
            return state.selectedHotel
        },
        hotels: state => {
            return state.hotels
        }
    },

    mutations: {
        setRooms(state, rooms) {
            state.rooms = rooms
        },
        setRoom(state, room) {
            state.room = room
        },
        setImageUrl(state, imageUrl) {
            state.imageUrl = imageUrl
        },
        setResetRoom(state) {
            state.room.name = null,
                state.room.description = null,
                state.room.price = null,
                state.imageUrl = null
        },
        setSelectedHotel(state, hotel) {
            state.selectedHotel = hotel;
        },
        setHotels(state, hotels) {
            state.hotels = hotels;
        }
    },

    actions: {
        getRoomsInHotel({ commit, state }, id) {
            axios.get(`/api/rooms/${id}`)
                .then(response => {
                    if (response.data.length > 0) {
                        commit('setRooms', response.data)
                    } else {
                        commit('setRooms', null)
                    }
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
        },

        getListHotels({commit}){
            axios.get(`/api/listHotels`)
                .then(response => {
                    commit('setHotels', response.data)
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error.message)
                });
        },

        async storeRoom({commit, dispatch, state}, {file, data}){
            console.log('method in room store');
        }
    },
}
