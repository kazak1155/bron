<template>
    <div>
        <div class="container mt-5">
            <h1>
                EDit hotel
            </h1>
        </div>

        <form
            @submit.prevent="updateHotel({id: hotel.id, name: hotel.name, description: hotel.description, address: hotel.address})">
            <div>
                <input class="mb-3" v-model="hotel.id" id="hotelId" type="hidden"/>
            </div>
            <div class="mb-3 border-top">
                <label class="form-label">enter hotel name to edit</label>
                <br>
                <input class="mb-3" v-model="hotel.name" type="text" id="nameHotel" placeholder="Hotel name"/>
                <div v-if="errors?.name?.length">
                    <p class="w-25 alert alert-danger">{{ errors.name }}</p>
                </div>
            </div>
            <div class="mb-3 border-top">
                <label class="form-label">enter description name to edit</label>
                <br>
                <input class="mb-3" v-model="hotel.description" type="text" name="description" id="hotelDescription"
                       placeholder="Hotel description">
                <div v-if="errors?.description?.length">
                    <template v-for="error in errors.description">
                        <p class="w-25 alert alert-danger">{{ error }}</p>
                    </template>
                </div>
            </div>
            <div class="mb-3 border-top">
                <label class="form-label">enter address name to edit</label>
                <br>
                <input class="mb-3" v-model="hotel.address" type="text" id="hotelAddress" placeholder="Hotel address">
                <div v-if="errors?.address?.length">
                    <p class="w-25 alert alert-danger">{{ errors.address }}</p>
                </div>
            </div>
            <div v-if="hotel.img_url">
                <img :src='hotel.img_url' class="w-50" alt="изображение отеля"/>
            </div>
            <div class="mb-3 border-top">
                <label class="form-formData.bel">upload image hotel to edit</label>
                <br>
                <input class="mb-3" type="file" @change="onFileChange"/>
            </div>
            <div v-if="errors?.file?.length">
                <template v-for="error in errors.file">
                    <p class="w-25 alert alert-danger">{{ error }}</p>
                </template>
            </div>
            <div v-if="imageUrl" class="mb-3">
                <h3>Предпросмотр загруженного изображения:</h3>
                <img :src="imageUrl" alt="Uploaded Image" width="200"/>
            </div>
            <div class="mb-3">
                <button class="btn btn-primary" type="submit">Update hotel</button>
            </div>
        </form>


    </div>
</template>

<script>
import {mapGetters} from "vuex";
import {compileString} from "sass";

export default {
    name: "showOne",

    mounted() {
        this.$store.dispatch('hotel/getOneHotel', this.$route.params.id)
    },

    computed: {
        ...mapGetters({
            hotel: 'hotel/hotel',
            file: 'hotel/image',
            imageUrl: 'hotel/imageUrl',
            errors: 'hotel/errors',
            message: 'hotel/message',
            visibleMessage: 'hotel/isVisible',
            classMessage: 'hotel/classMessage',
        }),
    },

    methods: {

        onFileChange(event) {
            this.$store.commit('hotel/setImage', event.target.files[0])
            this.$store.commit('hotel/setImageUrl', URL.createObjectURL(event.target.files[0]))
        },

        updateHotel(hotel) {
            const file = this.file;
            const data = {
                name: hotel.name,
                description: hotel.description,
                address: hotel.address,
                id: hotel.id
            };
            this.$store.dispatch('hotel/updateHotel', { file, data });
        },
    }
}
</script>

<style scoped>
.highlight {
    color: black; /* Цвет текста для выделенного слова */
    font-weight: normal; /* Убираем жирный шрифт */
    font-size: 1.00rem;
}

</style>
