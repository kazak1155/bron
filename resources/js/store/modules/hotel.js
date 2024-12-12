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
        }
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
        addHotel({commit, state}, data) {
            console.log(state.image)
            axios.post("/api/hotelStore",
                {
                    name: data.name,
                    description: data.description,
                    address: data.address,
                    image: state.image,
                })
                .then(response => {
                    console.log(response)
                    // commit('setImage', response.data.data)
                    // router.push({ name: 'hotel.store' })

                })
                .catch(error => {
                    console.log(error.message)
                });
        },

        async storeHotel({ commit, state }, data) {
            console.log('uploadImage');
            const formData = new FormData();
            formData.append('file', state.image);
            formData.append('name', data.name);
            formData.append('description', data.description);
            formData.append('address', data.address);
            axios.post('/api/hotelStore', formData)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error.message)
                });

            console.log(111);
            commit('setImage', null)
            commit('setImageUrl', null)
            commit('setResetHotel')
        },

        onImageSelected({commit}, event) {
            // console.log(event.target.files[0]);
            commit('setImage', event.target.files[0])
            commit('setImageUrl', URL.createObjectURL(event.target.files[0]))
        },

        getImageUrl({ getters }) {
            console.log(getters.imageUrl);
        },

        handleFileUpload({commit}, event){
            // commit('setImageUrl', event.target.files[0])
            commit('setFile', file)

        },

        getImageFromStorage({state, commit}){
            axios.get('127.0.0.1/storage/' +  state.hotel.img_url)
                .then(response => {
                    console.log(response.data)
                })
        },
    },
}
