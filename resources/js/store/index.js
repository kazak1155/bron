import { createStore } from "vuex";
import hotel from './modules/hotel.js'
import room from './modules/room.js'
import user from "./modules/user.js";


const store = createStore({
    modules: {
        hotel: hotel,
        room: room,
        user: user,
    }
});

export default store
