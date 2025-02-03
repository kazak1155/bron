<template>
    <div v-show="visibleMessage == true" :class="classMessage" >
        {{ message }}
    </div>
    <div class="container mt-5">
        <h1>
            Index room
        </h1>
    </div>
<!--    <div class="card m-lg-3 p-3" style="width: 40%">-->
<!--        <div class="card-body">-->
<!--            <div v-if="hotel.img_url !== '/storage/'">-->
<!--                <img :src='hotel.img_url' class="w-50" alt="изображение отеля"/>-->
<!--            </div>-->
<!--            <h5 class="card-title fw-bold"><span class="highlight">name: </span> {{ hotel.name }}</h5>-->
<!--            <p class="card-text">description: <b>{{ hotel.description }}</b></p>-->
<!--            <p class="card-text">address: <b>{{ hotel.address }}</b></p>-->
<!--            <template v-for="room in hotel.room_id">-->
<!--                <router-link class="btn btn-primary m-lg-2" :to="{ name: 'room.show', params: { id: room.id }}">-->
<!--                    {{ room.name }}-->
<!--                </router-link>-->
<!--            </template>-->
<!--            <div v-if="rooms != null">-->
<!--                room exist-->
<!--                <template v-for="room in rooms">-->
<!--&lt;!&ndash;                    <router-link class="btn btn-primary m-lg-2" :to="{ name: 'room.show', params: { id: room.id }}">&ndash;&gt;-->
<!--                        {{ room.name }}-->
<!--&lt;!&ndash;                    </router-link>&ndash;&gt;-->
<!--                </template>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div>-->
<!--        <router-link class="btn btn-success" :to="{ name: 'edit.hotel', params: {id: hotel.id}}">-->
<!--            Edit Hotel-->
<!--        </router-link>-->
<!--    </div>-->

</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "showOneRoom",

    mounted() {
        // this.$store.dispatch('hotel/getOneHotel', this.$route.params.id)
        // this.$store.dispatch('room/getRoomsInHotel', this.$route.params.id)
    },

    computed: {
        // ...mapGetters({
        //     rooms: 'room/rooms'
        // }),
        // ...mapGetters({
        //     hotel: 'hotel/hotel',
        //     message: 'hotel/message',
        //     visibleMessage: 'hotel/isVisible',
        //     classMessage: 'hotel/classMessage',
        // }),
    },


}
</script>

<style scoped>

</style>
