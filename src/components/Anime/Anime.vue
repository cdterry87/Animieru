<template>
    <div id="view-anime">
        <ActionBar />
        <div class="container">
            <div class="columns">
                <div class="column is-5">
                    <Details :details="details" :isLoading="isLoading" />
                    <Synopsis :synopsis="details.synopsis" v-if="typeof(details.synopsis) !== 'undefined' && details.synopsis.length > 0" :isLoading="isLoading" />
                    <Related :related="details.related" v-if="typeof(details.related) !== 'undefined' && details.related.length > 0" :isLoading="isLoading" />
                    <Episodes :episodes="episodes" v-if="typeof(episodes) !== 'undefined' && episodes.length > 0" :isLoading="isLoading" />
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
            isLoading: true
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
            axios.get('https://api.jikan.moe/anime/' + this.id + '/characters_staff')
                .then(response => {
                    this.details = response.data;
                    this.characters = response.data.character;
                    this.isLoading = false;
                })
                .catch(error => {
                    // console.log(error);
                });

            axios.get('https://api.jikan.moe/anime/' + this.id + '/episodes')
                .then(response => {
                    this.episodes = response.data.episode
                })
                .catch(error => {
                    // console.log(error);
                });
        }
    }
}
</script>