import { createStore } from "vuex";
import hotel from './modules/hotel.js'
import room from './modules/room.js'


const store = createStore({
    modules: {
        hotel: hotel,
        room: room,
    }
});

export default store
