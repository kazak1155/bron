<template>
    <div v-show="visibleMessage == true" :class="classMessage" >
        {{ message }}
    </div>
    <div>
        <h2>Store room</h2>
        <form
            @submit.prevent="storeRoom()">
            <div class="mb-3 border-top">
                <label class="form-label">enter name room</label>
                <br>
                <input class="mb-3" v-model="room.name" type="text" id="roomName" placeholder="room name"/>
                <div v-if="errors?.name?.length">
                    <p class="w-25 alert alert-danger">{{ errors.name }}</p>
                </div>
            </div>
            <div class="mb-3 border-top">
                <label class="form-label">enter description room</label>
                <br>
                <input class="mb-3" v-model="room.description" type="text" name="roomDescription" id="roomDescription"
                       placeholder="room description">
            </div>
            <div class="mb-3 border-top">
                <label class="form-label">enter price room</label>
                <br>
                <input class="mb-3" v-model="room.price" type="text" id="roomPrice" placeholder="price room">
                <div v-if="errors?.price?.length">
                    <p class="w-25 alert alert-danger">{{ errors.price }}</p>
                </div>
            </div>
            <div>
                <label for="options">select hotel:</label>
                <select id="mySelect" v-model="localSelectedHotel" @change="onHotelChange">
                    <option disabled value="">Пожалуйста, выберите один вариант</option>
                    <option v-for="hotel in hotels" :key="hotel.id" :value="hotel.name">
                        {{ hotel.name }}
                    </option>
                </select>
                <p v-if="localSelectedHotel" > <br> selected hotel: <b>{{ localSelectedHotel }}</b></p>
                <div v-if="errors?.hotel_id?.length">
                    <p class="w-25 alert alert-danger">{{ errors.hotel_id }}</p>
                </div>
            </div>
            <br>
            <div class="mb-3 border-top">
                <label class="form-formData.bel">upload image room</label>
                <br>
                <input class="mb-3" type="file" @change="onFileChange"/>
            </div>
            <div v-if="imageUrl" class="mb-3">
                <h3>Предпросмотр изображения:</h3>
                <img :src="imageUrl" alt="Uploaded Image" width="200"/>
            </div>
            <div class="mb-3">
                <button class="btn btn-primary" type="submit">Create room</button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';


export default {

    data() {
        return {
            localSelectedHotel: null,
        };
    },

    computed: {
        ...mapGetters({
            room: 'room/room',
            selectedHotel: 'room/selectedHotel',
            hotels: 'room/hotels',
            // file: 'hotel/image',
            imageUrl: 'room/imageUrl',
            errors: 'room/errors',
            message: 'hotel/message',
            visibleMessage: 'hotel/isVisible',
            classMessage: 'hotel/classMessage',
        }),
        selectedHotelId() {
            const selectedHotel = this.hotels.find(hotel => hotel.name === this.localSelectedHotel);
            return selectedHotel ? selectedHotel.id : null;
        },
    },

    mounted() {
        this.$store.commit('room/setResetRoom')
        this.$store.dispatch('room/getListHotels')
    },

    methods: {

        onHotelChange(event) {
            this.$store.commit('room/setSelectedHotel', this.localSelectedHotel);
            console.log('ID выбранного отеля:', this.selectedHotelId);
        },

        onFileChange(event) {
            this.$store.commit('room/setImageUrl', URL.createObjectURL(event.target.files[0]))
        },

        storeRoom(Room) {
            console.log('method in vue component');
            const file = this.file;

            // console.log(this.localSelectedHotel);
            // console.log(this.room.name)
            const data = {
                name: this.room.name,
                description: this.room.description,
                price: this.room.price,
                hotel_id: this.selectedHotelId
            };
            this.$store.dispatch('room/storeRoom', { file, data });
        },
    }
};
</script>
