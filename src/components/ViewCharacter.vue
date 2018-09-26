<template>
    <div id="view-character" class="container">
        <ActionBar />
        <div class="columns is-multiline">
            <div class="column is-12">
                <div class="box">
                    <div class="title">
                        {{ characterDetails.name }} {{ characterDetails.name_kanji }}
                    </div>
                    <div class="subtitle">
                        {{ characterDetails.nicknames }}
                    </div>
                    <p>
                        {{ characterDetails.about }}
                    </p>
                </div>
            </div>
            <div class="column is-4">
                <div class="box" id="related">
                    <div class="line">
                        <span class="title is-5">Animeography</span>
                    </div>
                    <div v-for="animeography in characterDetails.animeography" :key="animeography.mal_id">
                        <router-link :to="'/anime/' + animeography.mal_id">
                            <strong>{{ animeography.name }}</strong>
                        </router-link>
                    </div>

                    <hr>

                    <div class="line">
                        <span class="title is-5">Mangaography</span>
                    </div>
                    <div v-for="mangaography in characterDetails.mangaography" :key="mangaography.mal_id">
                        <router-link :to="'/manga/' + mangaography.mal_id">
                            <strong>{{ mangaography.name }}</strong>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="column is-4">
                <div class="box">
                    <div class="line">
                        <span class="title is-5">Voice Actors</span>    
                    </div> 
                    <table class="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Language</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="actor in characterDetails.voice_actor" :key="actor.mal_id">
                                <td><img :src="actor.image_url" class="image"></td>
                                <td><router-link :to="'/actor/' + actor.mal_id">{{ actor.name }}</router-link></td>
                                <td>{{ actor.language }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="column is-4">
                <div class="box">
                    <div class="line">
                        <span class="title is-5">Images</span>
                    </div>
                    <div class="columns is-multiline">
                        <div class="column is-one-third" v-for="image in characterDetails.image" :key="image">
                            <img :src="image" class="image" @click="popupImageOpen(image)" />
                        </div>
                    </div>
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
import { mapGetters } from 'vuex';
import ActionBar from './ActionBar.vue';

export default {
    name: 'ViewAnimeCharacter',
    props: ['id'],
    components: {
        ActionBar
    },
    data: function() {
        return {
            modalActive: false,
            modalImage: ''
        }
    },
    created() {
        let payload = {
            'id': this.id,
        }

        this.$store.dispatch('getCharacterDetails', payload);
    },
    computed: {
        ...mapGetters(['characterDetails'])
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
#related {
    font-size: 14px;
}

.image {
    cursor: pointer;
}
</style>