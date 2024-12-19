import axios from 'axios';
import router from "../../router/router.js";

export default  {
    namespaced: true,

    state: {
        hotels: null,
        image: null,
        imageUrl: null,
        hotel: {
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
                state.hotel.address = null
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

        getOneHotel({ commit }, id) {
            axios.get(`/api/hotel/${id}`)
                .then(response => {
                    commit('setHotel', response.data.data)
                    console.log(response.data.data)
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

         storeHotel({ commit, dispatch, state }, { file, data }) {
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

             return axios.post('/api/hotel_store',  formData, {
                 headers: {
                     'Content-Type': 'multipart/form-data',
                 },
             })
                 .then(response => {
                     commit('setMessage', ('cоздан новый отель с именем: ') + data.name)
                     commit('setIsVisible', true)
                     commit('serClassMessage', 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3')
                     console.log(response);
                 })
                 .catch(error => {
                     if (error.response && error.response.status === 422) {
                         commit('setErrors', error.response.data.errors)
                         console.log(error.response.data.errors)
                     } else {
                         console.error(error);
                     }
                 });

             // commit('setErrors', null)
            // try {
            //     const response =  axios.post('/api/hotel_store', data.name)
            //     console.log('not error');
            //     // commit('setMessage', ('create hotel with name: ') + response.data) //установка текста сообщения
            //     commit('setIsVisible', true) // меняем видимость сообщения
            //     commit('serClassMessage', 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3') //придаем сообщению определенный класс
            //     setTimeout(() => {
            //         commit('setIsVisible', false)// Скрываем элемент через 3 секунды
            //     }, 3000);
            //     commit('setImage', null)
            //     // commit('setImageUrl', null)
            //     commit('setErrors', null)
            //     commit('setResetHotel')
            //     // dispatch('setMessage', 'new hotel create with name: '+ data.name);
            //     // router.push({ name: 'index.hotel'})
            // } catch (error) {
            //     console.log('error');
            //     {
            //         if (error.response && error.response.status === 422) {
            //             commit('setErrors', error.response.data.errors)
            //             console.log(error.response.data.errors)
            //         } else {
            //             console.error(error);
            //         }
            //     }
            // }
        },

        onImageSelected({commit}, event) {
            // console.log(event.target.files[0]);
            commit('setImage', event.target.files[0])
            commit('setImageUrl', URL.createObjectURL(event.target.files[0]))
        },
    }
}
