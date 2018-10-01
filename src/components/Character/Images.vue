<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <div class="line">
                <span class="title is-5">Images</span>
            </div>
            <div class="columns is-multiline is-mobile">
                <div class="column is-one-third-mobile is-one-third-tablet is-one-third-desktop" v-for="image in images" :key="image">
                    <img :src="image" class="image" @click="popupImageOpen(image)" />
                </div>
            </div>
        </div>

        <div class="modal" :class="{ 'is-active': modalActive }" @click="popupImageClose()" id="image-modal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <img :src="modalImage" class="image">
            </div>
            <button class="modal-close is-large" aria-label="close" @click="popupImageClose()"></button>
        </div>
    </div>
</template>

<script>
import Loading from '../Utility/Loading';

export default {
    name: 'Images',
    props: ['images', 'isLoading'],
    components: {
        Loading
    },
    data: function() {
        return {
            modalActive: false,
            modalImage: ''
        }
    },
    methods: {
        popupImageOpen(image_url) {
            this.modalActive = true;
            this.modalImage = image_url;
        },
        popupImageClose() {
            this.modalActive = false;
            this.modalImage = '';
        }
    }
}
</script>

<style scoped>
.image {
    cursor: pointer;
}
</style>