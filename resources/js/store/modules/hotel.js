import axios from 'axios';
import Vuex from 'vuex';
import router from "../../router/router.js";

export default  {
    namespaced: true,

    state: {
        hotels: null,
        image: null,
        imageUrl: null,
        hotel: {
            id: null,
            name: null,
            description: null,
            address: null,
            room_id: null,
            img_url: null,
            dataForStoreHotel: null,
        },
        errors: {
            name: null,
            description: null,
            address: null,
        },
        message: null,
        isVisible: false,
        classMessage: null,

    },

    getters: {
        hotels:  state => {
            return state.hotels
        },

        hotel: state => {
            return state.hotel
        },

        image: state => {
            return state.image
        },

        imageUrl: state => {
            return state.imageUrl
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
        setHotels(state, hotels) {
            state.hotels = hotels
        },

        setHotel(state, hotel) {
            state.hotel = hotel
        },

        setResetHotel(state) {
            state.hotel.name = null,
            state.hotel.description = null,
            state.hotel.address = null,
            state.imageUrl = null
        },

        setImage(state, image) {
            state.image = image
        },

        setImageUrl(state, imageUrl) {
            state.imageUrl = imageUrl
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

        setErrorAddress(state, address) {
            state.errors.address = address
        }
    },

    actions: {
        getAllHotels({ commit }) {
            axios.get("/api/hotels")
                .then(response => {
                    commit('setHotels', response.data.data)
                    console.log(response.data.data)
                })
                .catch(error => {
                    console.log(error.message)
                });
        },

        getOneHotel({ commit, state }, id) {
            axios.get(`/api/hotel/${id}`)
                .then(response => {
                    commit('setHotel', response.data.data)
                    // console.log(response.data.data)
                })
                .catch(error => {
                    console.log(error.message)
                });
        },

        deleteHotel({dispatch, commit}, id) {
            axios.delete(`/api/hotel/${id}`,
            )
                .then(response => {
                    dispatch('getAllHotels') //получение все отелей
                    commit('setMessage', ('hotel delete with name: ') + response.data) //установка текта сообщения
                    commit('setIsVisible', true) // меняем видимость сообщения
                    commit('serClassMessage', 'alert alert-danger position-fixed top-0 start-50 translate-middle-x mt-3') //придаем сообщению определенный класс
                    setTimeout(() => {
                        commit('setIsVisible', false)// Скрываем элемент через 3 секунды
                    }, 3000);
                })
                .catch(error => {
                    console.log(error.response)
                });
        },

         async storeHotel({commit, dispatch, state}, {file, data}) {
             try {
                 const formData = new FormData();

                 if (!data.name) {
                     commit('setErrorName', 'поле не должно быть пустым')
                     return;
                 } else {
                     commit('setErrorName', null)
                 }
                 if (!data.address) {
                     commit('setErrorAddress', 'поле не должно быть пустым')
                     return;
                 } else {
                     commit('setErrorAddress', null)
                 }
                 if (file) {
                     formData.append('file', file);
                 }

                 formData.append('name', data.name);
                 formData.append('description', data.description);
                 formData.append('address', data.address);
                 const response = await axios.post('/api/hotel_store',  formData);
                 await router.push({name: 'index.hotel'}) // Используем метод push и ждем его завершения
                 commit('setResetHotel')
             } catch (error) {
                 if (error.response && error.response.status === 422) {
                     commit('setErrors', error.response.data.errors)
                     console.log(error.response.data.errors)
                 } else {
                     console.error(error);
                 }
             }
         },

        onImageSelected({commit, state}, event) {
            // console.log(event.target.files[0]);
            commit('setImage', event.target.files[0])
            commit('setImageUrl', URL.createObjectURL(event.target.files[0]))
        },

        async updateHotel({commit, state}, {file, data}) {
            const id = data.id
            // console.log(data);
            const formData = new FormData();
            try {
                if (!data.name) {
                    commit('setErrorName', 'поле не должно быть пустым JS')
                    return;
                } else {
                    commit('setErrorName', null)
                }
                if (!data.address) {
                    commit('setErrorAddress', 'поле не должно быть пустым JS')
                    return;
                } else {
                    commit('setErrorAddress', null)
                }
                if (file) {
                    formData.append('file', file);
                }

                formData.append('name', data.name);
                formData.append('description', data.description);
                formData.append('address', data.address);
                formData.append("_method", 'PATCH')

                const response = await axios.post(`/api/hotel/${id}`,  formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                console.log(response.data);
            } catch (error) {
                if (error.response && error.response.status === 422) {
                    commit('setErrors', error.response.data.errors)
                    console.log(error.response.data.errors)
                } else {
                    console.error(error);
                }
                console.error('Ошибка при выполнении запроса:', error.response.data);
            }
        },
    }
}
