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
<!--                <div v-if="errors?.name?.length">-->
<!--                    <p class="w-25 alert alert-danger">{{ errors.name }}</p>-->
<!--                </div>-->
            </div>
            <div class="mb-3 border-top">
                <label class="form-label">enter description room</label>
                <br>
                <input class="mb-3" v-model="room.description" type="text" name="roomDescription" id="roomDescription"
                       placeholder="room description">
<!--                <div v-if="errors?.description?.length">-->
<!--                    <template v-for="error in errors.description">-->
<!--                        <p class="w-25 alert alert-danger">{{ error }}</p>-->
<!--                    </template>-->
<!--                </div>-->
            </div>
            <div class="mb-3 border-top">
                <label class="form-label">enter price room</label>
                <br>
                <input class="mb-3" v-model="room.price" type="text" id="roomPrice" placeholder="price room">
<!--                <div v-if="errors?.address?.length">-->
<!--                    <p class="w-25 alert alert-danger">{{ errors.address }}</p>-->
<!--                </div>-->
            </div>
            <div>
                <label for="options">select hotel:</label>
<!--                    <select id="hotels" @change="onHotelChange" v-model="selectedHotel">-->
<!--                        <option v-for="hotel in hotels" :key="hotel.name" :value="hotel.name">-->
<!--                            {{ hotel.name }}-->
<!--                        </option>-->
<!--                    </select>-->
<!--                <select id="mySelect" v-model="selectedHotel">-->
                <select id="mySelect" v-model="localSelectedHotel" @change="onHotelChange">
                    <option disabled value="">Пожалуйста, выберите один вариант</option>
                    <option v-for="hotel in hotels" :key="hotel.id" :value="hotel.name">
                        {{ hotel.name }}
                    </option>
                </select>
                <p v-if="localSelectedHotel" > <br> selected hotel: <b>{{ localSelectedHotel }}</b></p>
            </div>
            <br>
            <div class="mb-3 border-top">
                <label class="form-formData.bel">upload image room</label>
                <br>
                <input class="mb-3" type="file" @change="onFileChange"/>
            </div>
<!--            <div v-if="errors?.file?.length">-->
<!--                <template v-for="error in errors.file">-->
<!--                    <p class="w-25 alert alert-danger">{{ error }}</p>-->
<!--                </template>-->
<!--            </div>-->
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
            // errors: 'hotel/errors',
            message: 'hotel/message',
            visibleMessage: 'hotel/isVisible',
            classMessage: 'hotel/classMessage',
        })
    },

    mounted() {
        this.$store.commit('room/setResetRoom')
        this.$store.dispatch('room/getListHotels')
    },

    methods: {

        onHotelChange() {
            this.$store.commit('room/setSelectedHotel', this.localSelectedHotel);
            // console.log(this.localSelectedHotel);
        },

        onFileChange(event) {
            this.$store.commit('room/setImageUrl', URL.createObjectURL(event.target.files[0]))
        },

        storeRoom(Room) {
            console.log('method in vue component');
            // const image_url = this.localSelectedHotel
            const file = this.file;
            // console.log(image_url);
            console.log(this.room.name)
            const data = {
                name: this.room.name,
                description: this.room.description,
                price: this.room.price,
                image_url: this.localSelectedHotel
            };
            // this.$store.dispatch('room/storeRoom', { file, data });
        },
    }
};
</script>
