<template>
    <div v-show="isVisible == true" :class="classMessage" >
         {{ message }}
    </div>
    <div>
        <div class="d-flex justify-content-center">
            <h2>All hotels</h2>
        </div>
        <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
            <tr>
                <th>Name hotel</th>
                <th>Description hotel</th>
                <th>Address</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="hotel in hotels">
                <tr>
                    <td>
                        <router-link v-if="hotel && hotel.id" :to="{ name: 'show.hotel', params: { id: hotel.id }}">
                            {{ hotel.name }}
                        </router-link>
                    </td>
                    <td>
                        {{ hotel.description }}
                    </td>
                    <td>
                        {{ hotel.address }}
                    </td>
                    <td>
                        <router-link class="btn btn-success" :to="{ name: 'edit.hotel', params: {id: hotel.id}}"> Edit
                            Hotel
                        </router-link>
                    </td>
                    <td>
                            <i @click.prevent="$store.dispatch('hotel/deleteHotel', hotel.id)" class="bi bi-trash fs-2"></i>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'
import {isVisible} from "bootstrap/js/src/util/index.js";

export default {
    name: "show",
    methods: {isVisible},

    mounted() {
        this.$store.dispatch('hotel/getAllHotels')
    },

    computed: {
        ...mapGetters({
            hotels: 'hotel/hotels',
            message: 'hotel/message',
            isVisible: 'hotel/isVisible',
            classMessage: 'hotel/classMessage',
        })
    },
}

</script>

<style scoped>

</style>
