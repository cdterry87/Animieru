<template>
    <div id="view-anime">
        <ActionBar />
        <div class="container">
            <div class="columns">
                <div class="column is-5">
                    <Details :details="details" :isLoading="isLoading" />
                    <Synopsis :synopsis="details.synopsis" v-if="typeof(details.synopsis) !== 'undefined' && details.synopsis.length > 0" :isLoading="isLoading" />
                    <Related :related="details.related" :isLoading="isLoading" />
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

                    // this.episodes = this.getEpisodes(this.id, response.data.episode.episode_last_page);
                })
                .catch(error => {
                    // console.log(error);
                });
        },
        //This is an experimental function to get the full list of episodes even when it's paginated.
        getEpisodes(id, last_page) {
            let episodes = {};
            let api_path = '';

            for (let i = 1; i < last_page; i++) {
                api_path = 'https://api.jikan.moe/anime/' + id + '/episodes/' + i;
                axios.get(api_path)
                    .then(response => {
                        //Need to push the list of episodes here.
                    })
                    .catch(error => {
                        // console.log(error);
                    });
            }

            episodes = Object.assign(e[0], e[1]);

            console.log('episodes: ', episodes);

            return episodes;
        }
    }
}
</script>