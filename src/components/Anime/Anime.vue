<template>
    <div id="view-anime" class="container">
        <ActionBar />
        <div class="columns">
            <div class="column is-5">
                <Details :details="animeDetails" :isLoading="isLoadingAnime" />
                <Synopsis :synopsis="animeDetails.synopsis" v-if="typeof(animeDetails.synopsis) !== 'undefined' && animeDetails.synopsis.length > 0" :isLoading="isLoadingAnime" />
                <Related :related="animeDetails.related" v-if="typeof(animeDetails.related) !== 'undefined' && animeDetails.related.length > 0" :isLoading="isLoadingAnime" />
                <Episodes :episodes="animeEpisodes" v-if="typeof(animeEpisodes) !== 'undefined' && animeEpisodes.length > 0" :isLoading="isLoadingAnime" />
            </div>
            <div class="column is-7">
                <Characters :characters="animeCharacters" :isLoading="isLoadingAnime" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ActionBar from '../Utility/ActionBar';
import Details from './Details';
import Synopsis from './Synopsis';
import Related from './Related';
import Episodes from './Episodes';
import Characters from './Characters';

export default {
    name: '',
    props: ['id'],
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
    computed: {
        ...mapGetters(['animeDetails', 'animeEpisodes', 'animeCharacters', 'isLoadingAnime'])
    },
    watch: {
        '$route' () {
            this.getInfo();
        }
    },
    methods: {
        getInfo() {
            let payload = {
                'id': this.id,
            }

            this.$store.dispatch('getAnimeEpisodes', payload);
            this.$store.dispatch('getAnimeDetails', payload);
        }
    }
}
</script>