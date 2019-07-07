<template>
    <div id="view-anime">
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
            <div class="columns">
                <div class="column is-5">
                    <Details :details="details" :isLoading="isLoading" />
                    <Synopsis :synopsis="details.synopsis" v-if="typeof(details.synopsis) !== 'undefined' && details.synopsis.length > 0" :isLoading="isLoading" />
                    <Related :related="details.related" :isLoading="isLoading" />
                </div>
                <div class="column is-7">
                    <Characters :characters="characters" :isLoading="isLoading" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ActionBar from '../Utility/ActionBar';
import Details from './Details';
import Synopsis from './Synopsis';
import Related from './Related';
import Episodes from './Episodes';
import Characters from './Characters';

export default {
    name: '',
    props: ['id'],
    data() {
        return {
            details: '',
            episodes: '',
            characters: '',
            isLoading: true,
            retryMode: false
        }
    },
    components: {
        ActionBar,
        Details,
        Synopsis,
        Related,
        Episodes,
        Characters,
    },
    created() {
        setTimeout(this.getInfo, 2000)
    },
    watch: {
        '$route' () {
            this.getInfo();
        }
    },
    methods: {
        getInfo() {
            this.isLoading = true;
            this.retryMode = false;
            axios.get('https://api.jikan.moe/anime/' + this.id + '/characters_staff')
                .then(response => {
                    this.details = response.data;
                    this.characters = response.data.character;
                    this.isLoading = false;
                })
                .catch(error => {
                    // console.log(error);
                    this.isLoading = false;
                    this.retryMode = true;
                });
        }
    }
}
</script>