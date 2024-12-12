
<template>

    <div class="card m-lg-3 p-3" style="width: 30%">
        <img :src="hotel.img_url" alt="hotel img" />
        <div class="card-body">
            <h5 class="card-title fw-bold">{{ hotel.name }}</h5>
            <p class="card-text">description: <b>{{ hotel.description }}</b></p>
            <p class="card-text">address: <b>{{ hotel.address }}</b></p>
            <template v-for="room in hotel.room_id">
                <router-link class="btn btn-primary m-lg-2" :to="{ name: 'room.show', params: { id: room.id }}">
                    {{ room.name }}
                </router-link>
            </template>
        </div>
    </div>

</template>

<script>
import {mapGetters} from "vuex";
import hotel from "../../js/store/modules/hotel.js";

export default {
    name: "showOne",

    mounted() {
        this.$store.dispatch('hotel/getOneHotel', this.$route.params.id)
    },

    computed: {
        ...mapGetters({
            hotel: 'hotel/hotel'
        }),
    },
}
</script>

<style scoped>

</style>
