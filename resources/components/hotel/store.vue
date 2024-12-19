<template>
    <div v-show="visibleMessage == true" :class="classMessage" >
        {{ message }}
    </div>
    <div>
        <h2>Create hotel</h2>
        <form
            @submit.prevent="storeHotel({name: hotel.name, description: hotel.description, address: hotel.address})">
            <div class="mb-3 border-top">
                <label class="form-label">enter hotel name</label>
                <br>
                <input class="mb-3" v-model="hotel.name" type="text" id="nameHotel" placeholder="Hotel name"/>
                <div v-if="errors?.name?.length">
                    <p class="w-25 alert alert-danger">{{ errors.name }}</p>
                </div>
            </div>
            <div class="mb-3 border-top">
                <label class="form-label">enter description name</label>
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
                <label class="form-label">enter address name</label>
                <br>
                <input class="mb-3" v-model="hotel.address" type="text" id="hotelAddress" placeholder="Hotel address">
                <div v-if="errors?.address?.length">
                    <p class="w-25 alert alert-danger">{{ errors.address }}</p>
                </div>
            </div>
            <div class="mb-3 border-top">
                <label class="form-formData.bel">upload image hotel</label>
                <br>
                <input class="mb-3" type="file" @change="onFileChange"/>
            </div>
            <div v-if="errors?.file?.length">
                <template v-for="error in errors.file">
                    <p class="w-25 alert alert-danger">{{ error }}</p>
                </template>
            </div>
            <div v-if="imageUrl" class="mb-3">
                <h3>Предпросмотр изображения:</h3>
                <img :src="imageUrl" alt="Uploaded Image" width="200"/>
            </div>
            <div class="mb-3">
                <button class="btn btn-primary" type="submit">Create hotel</button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';


export default {

    // mounted() {
    //     this.$store.commit('hotel/setErrors', null)
    // },

    computed: {
        ...mapGetters({
            hotel: 'hotel/hotel',
            file: 'hotel/image',
            imageUrl: 'hotel/imageUrl',
            errors: 'hotel/errors',
            message: 'hotel/message',
            visibleMessage: 'hotel/isVisible',
            classMessage: 'hotel/classMessage',
        })
    },

    methods: {
        showUploadImage(event) {
            this.$store.dispatch('hotel/onImageSelected', event)
        },

        onFileChange(event) {
            this.$store.commit('hotel/setImage', event.target.files[0])
            this.$store.commit('hotel/setImageUrl', URL.createObjectURL(event.target.files[0]))
        },

        storeHotel(hotel) {
            const file = this.file;
            const data = {
                name: hotel.name,
                description: hotel.description,
                address: hotel.address
            };
            this.$store.dispatch('hotel/storeHotel', { file, data });
        },
    }
};
</script>
