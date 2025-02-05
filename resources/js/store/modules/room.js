import axios from "axios";
import router from "../../router/router.js";

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
        errors: {
            name: null,
            price: null,
            hotel_id: null,
        },
        message: null,
        isVisible: false,
        classMessage: null,
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
        },
        message: state => {
            return state.message
        },
        isVisible: state => {
            return state.isVisible
        },
        classMessage: state => {
            return state.classMessage
        },
        errors: state => {
            return state.errors
        },
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
        },
        setMessage(state, message) {
            state.message = message
        },

        setIsVisible(state, isVisible) {
            state.isVisible = isVisible
        },

        serClassMessage(state, classMessage) {
            state.classMessage = classMessage
        },
        setErrors(state, errors){
            state.errors = errors
        },

        setErrorName(state, name){
            state.errors.name = name
        },

        setErrorPrice(state, price) {
            state.errors.price = price
        },

        setErrorHotel_id(state, hotel_id) {
            state.errors.hotel_id = hotel_id
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
            // console.log(file);
            try {
                const formData = new FormData();

                if (!data.name) {
                    commit('setErrorName', 'поле не должно быть пустым')
                    return;
                } else {
                    commit('setErrorName', null)
                }
                if (!data.price) {
                    commit('setErrorPrice', 'поле не должно быть пустым')
                    return;
                } else {
                    commit('setErrorPrice', null)
                }
                if (!data.hotel_id) {
                    commit('setErrorHotel_id', 'нужно выбрать отель')
                    return;
                } else {
                    commit('setErrorHotel_id', null)
                }
                if (file) {
                    console.log('file exist');
                    formData.append('file', file);
                }

                formData.append('name', data.name);
                formData.append('description', data.description);
                formData.append('price', data.price);
                formData.append('hotel_id', data.hotel_id);
                const response = await axios.post('/api/room_store',  formData);
                console.log(response.data);
                // await router.push({name: 'index.hotel'}) // Используем метод push и ждем его завершения
                // commit('setResetHotel')
            } catch (error) {
                if (error.response && error.response.status === 422) {
                    commit('setErrors', error.response.data.errors)
                    console.log(error.response.data.errors)
                } else {
                    console.error(error);
                }
            }
        },
    },
}
