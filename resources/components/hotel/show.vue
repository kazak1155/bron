<template>
    <div v-if="visibleMessageHotel || visibleMessageRoom" :class="classMessageRoom == null ? classMessageHotel : classMessageRoom ">
        {{ messageRoom }} {{ messageHotel }}
    </div>
    <div class="container mt-5">
        <h1>
            Index hotel
        </h1>
    </div>
    <div class="card m-lg-3 p-3" style="width: 40%">
        <div class="card-body">
            <div v-if="hotel.img_url !== '/storage/'">
                <img :src='hotel.img_url' class="w-75" alt="изображение отеля"/>
            </div>
            <h5 class="card-title fw-bold"><span class="highlight">name: </span> {{ hotel.name }}</h5>
            <p class="card-text">description: <b>{{ hotel.description }}</b></p>
            <p class="card-text">address: <b>{{ hotel.address }}</b></p>
            <div v-if="rooms">
              rooms in hotel
                <br>
                <div class="d-flex justify-content-between">
                    <template v-for="room in rooms">
                        <div class="box">
                            <div class="container mt-4 text-center">
                                <button class="btn btn-primary">
                                    <router-link class="btn btn-primary m-lg-2" :to="{ name: 'show.room', params: { id: room.id }}">
                                        {{ room.name }}
                                    </router-link>
                                </button>
                                <button  class="btn btn-secondary">
                                    <i @click.prevent="$store.dispatch('room/deleteRoom', room.id)"  class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
    <div>
        <router-link class="btn btn-success" :to="{ name: 'edit.hotel', params: {id: hotel.id}}">
            Edit Hotel
        </router-link>
    </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "showOne",

    mounted() {
        this.$store.dispatch('hotel/getOneHotel', this.$route.params.id)
        this.$store.dispatch('room/getRoomsInHotel', this.$route.params.id)
        this.$store.commit('room/setMessage', null)
    },

    computed: {
        ...mapGetters({
            rooms: 'room/rooms',
            hotel: 'hotel/hotel',
            messageHotel: 'hotel/message',
            visibleMessageHotel: 'hotel/isVisible',
            classMessageHotel: 'hotel/classMessage',
            messageRoom: 'room/message',
            visibleMessageRoom: 'room/visibleMessage',
            classMessageRoom: 'room/classMessage',
        }),
    },
}
</script>

<style scoped>

</style>
