<template>
    <div v-if="visibleMessage" :class="classMessage" >
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
            <div v-if="errors?.file?.length">
                <p class="w-25 alert alert-danger">{{ errors.file }}</p>
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
            fileExtension: null,
            selectedFile: null,
        };
    },

    computed: {
        ...mapGetters({
            room: 'room/room',
            selectedHotel: 'room/selectedHotel',
            hotels: 'room/hotels',
            imageUrl: 'room/imageUrl',
            errors: 'room/errors',
            message: 'room/message',
            visibleMessage: 'room/visibleMessage',
            classMessage: 'room/classMessage',
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
            const file = event.target.files[0]; // Получаем загруженный файл
            this.selectedFile = file


            // Извлекаем расширение файла
            this.fileExtension = file.name.split('.').pop(); // Разделяем имя файла по точкам и берем последнее значение
            // console.log(this.fileExtension);
        },

        storeRoom(Room) {
            // console.log('method in vue component');
            const file = this.selectedFile ;
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
