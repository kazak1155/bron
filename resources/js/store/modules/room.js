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
        visibleMessage: false,
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
        visibleMessage: state => {
            return state.visibleMessage
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
            state.room.price = null,
            state.room.price= null,
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

        setVisibleMessage(state, visibleMessage) {
            state.visibleMessage = visibleMessage
        },

        setClassMessage(state, classMessage) {
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
        },

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

        async deleteRoom({dispatch, commit}, id) {
            try {
                const response = await axios.delete(`/api/room/${id}`);
                        commit('setMessage', (' room delete with name: ') + response.data.name) //установка текста сообщения
                        commit('setVisibleMessage', true) // меняем видимость сообщения
                        commit('setClassMessage', 'alert alert-danger position-fixed top-0 start-50 translate-middle-x mt-3') //придаем сообщению определенный класс
                        setTimeout(() => {
                        commit('setVisibleMessage', false)// Скрываем элемент через 5 секунд
                        }, 5000);
                console.log(response.data.hotel_id);
                router.go();
            } catch (error) {
                // console.log(error.response)
            }
        },

        async storeRoom({commit, dispatch, state}, {file, data}){
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
                    formData.append('file', file);
                }

                formData.append('name', data.name);
                formData.append('description', data.description);
                formData.append('price', data.price);
                formData.append('hotel_id', data.hotel_id);
                const response = await axios.post('/api/room_store',  formData);
                commit('setMessage', ('new room create with name: ') + data.name) //установка текста сообщения
                commit('setVisibleMessage', true) // меняем видимость сообщения
                commit('setClassMessage', 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3') //придаем сообщению определенный класс
                setTimeout(() => {
                    commit('setVisibleMessage', false)// Скрываем элемент через 3 секунды
                }, 5000);
                // console.log(response.data);
                await router.push({name: 'show.hotel', params: { id: data.hotel_id }}) // Используем метод push и ждем его завершения
                commit('setResetRoom')
                // console.log(state.message);
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
