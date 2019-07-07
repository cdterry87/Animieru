<template>
    <div id="view-character">
        <ActionBar />
        <div v-if="retryMode == true" class="has-text-centered">
            <div class="container">
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <div class="box">
                            <div class="has-text-centered">
                                Sorry, the page could not be loaded.  Please try again.
                            </div>
                            <br>
                            <button class="button is-primary" @click="getInfo()">
                                Retry
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="container">
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
            isLoading: true,
            retryMode: false
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
            this.retryMode = false;
            this.isLoading = true;
            axios.get("https://api.jikan.moe/character/" + this.id + "/pictures")
            .then(response => {
                this.details = response.data
                this.isLoading = false;
            })
            .catch(error => {
                setTimeout(this.getInfo, 4000)

                this.errorCounter++;

                if (this.errorCounter > 9) {
                    this.isLoading = false;
                    this.retryMode = true;
                }
            });
        }
    }
}
</script>