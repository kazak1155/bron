<template>
    <div>
        <div class="d-flex justify-content-center">
            <h2>All hotels</h2>
        </div>
        <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
            <tr>
                <th>Name hotel</th>
                <th>Description hotel</th>
                <th>Adress</th>
<!--                <th>Update</th>-->
            </tr>
            </thead>
            <tbody>
            <template v-for="hotel in hotels">
                <tr>
                    <td>
<!--                        <router-link v-if="hotel && hotel.id" :to="{ name: 'hotel.show', params: { id: hotel.id }}">-->
<!--                            {{ hotel.name }}-->
<!--                        </router-link>-->
                        {{ hotel.name }}
                    </td>
                    <td>
                        {{ hotel.description }}
                    </td>
                    <td>
                        {{ hotel.address }}
                    </td>
                    <td>
<!--                        <router-link class="btn btn-success" :to="{ name: 'hotel.edit', params: {id: hotel.id}}"> Edit-->
<!--                            Hotel-->
<!--                        </router-link>-->
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'
import store from "../../js/store/index.js";

export default {
    name: "show",

    mounted() {
        this.$store.dispatch('hotel/getAllHotels')
    },

    computed: {
        ...mapGetters({
            hotels: 'hotel/hotels'
        })
    },
}

</script>

<style scoped>

</style>
