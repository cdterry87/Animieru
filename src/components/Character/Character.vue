<template>
    <div id="view-character" class="container">
        <ActionBar />
        <div class="columns is-multiline">
            <div class="column is-12">
                <Details :details="details" :isLoading="isLoading" />
            </div>
            <div class="column is-4">
                <Related :related="details" :isLoading="isLoading" />
            </div>
            <div class="column is-4">
                <VoiceActors :actors="details.voice_actor" :isLoading="isLoading" />
            </div>
            <div class="column is-4">
                <Images :images="details.image" v-if="typeof(details.image) !== 'undefined' && details.image.length > 0" :isLoading="isLoading" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ActionBar from '../Utility/ActionBar';
import Details from './Details';
import Images from './Images';
import Related from './Related';
import VoiceActors from './VoiceActors';

export default {
    name: 'Character',
    props: ['id'],
    data() {
        return {
            details: '',
            isLoading: true
        }
    },
    components: {
        ActionBar,
        Details,
        Images,
        Related,
        VoiceActors,
    },
    created() {
        this.getInfo();
    },
    watch: {
        '$route' () {
            this.getInfo();
        }
    },
    methods: {
        getInfo() {
            this.isLoading = true;
            axios.get("https://api.jikan.moe/character/" + this.id + "/pictures")
            .then(response => {
                this.details = response.data
                this.isLoading = false;
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>