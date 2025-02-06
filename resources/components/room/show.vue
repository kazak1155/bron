<template>
    <div v-show="visibleMessage" :class="classMessage" >
        {{ message }}
    </div>
    <div class="container mt-5">
        <h1>
            Index room
        </h1>
    </div>
    <div class="card m-lg-3 p-3" style="width: 40%">
        <div class="card-body">
            <div v-if="room.image_url !== '/storage/'">
                <img :src='room .image_url' class="w-50" alt="изображение комнаты"/>
            </div>
            <p class="card-text">name: <h5 class="card-title fw-bold">{{ room.name }}</h5></p>
            <p class="card-text">description: <b>{{ room.description }}</b></p>
            <p class="card-text">price for day: <b>{{ room.price }}</b></p>
            <p class="card-text">hotel name: <b>{{ room.hotel_name }}</b></p>

        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import room from "../../js/store/modules/room.js";

export default {
    name: "showOneRoom",

    mounted() {
        // this.$store.dispatch('hotel/getOneHotel', this.$route.params.id)
        this.$store.dispatch('room/getOneRoom', this.$route.params.id)
    },

    computed: {
        ...mapGetters({
            // rooms: 'room/rooms'б
            room: 'room/room',
        }),
        ...mapGetters({
            message: 'hotel/message',
            visibleMessage: 'hotel/isVisible',
            classMessage: 'hotel/classMessage',
        }),
    },


}
</script>

<style scoped>

</style>
