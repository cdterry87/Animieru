<template>
    <div id="view-anime" class="container">
        <ActionBar />
        <div class="columns">
            <div class="column is-5">
                <ViewAnimeDetails :animeDetails="animeDetails" :isLoading="isLoading" />
                <ViewAnimeSynopsis :animeDetails="animeDetails" :isLoading="isLoading" />
                <ViewAnimeRelated :animeDetails="animeDetails" :isLoading="isLoading" />
                <ViewAnimeEpisodes :animeEpisodes="animeEpisodes" :isLoading="isLoading" />
            </div>
            <div class="column is-7">
                <ViewAnimeCharacters :animeCharacters="animeCharacters" :isLoading="isLoading" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ActionBar from './ActionBar.vue';
import ViewAnimeDetails from './ViewAnimeDetails.vue';
import ViewAnimeSynopsis from './ViewAnimeSynopsis.vue';
import ViewAnimeRelated from './ViewAnimeRelated.vue';
import ViewAnimeEpisodes from './ViewAnimeEpisodes.vue';
import ViewAnimeCharacters from './ViewAnimeCharacters.vue';

export default {
    name: 'ViewAnime',
    props: ['id'],
    components: {
        ActionBar,
        ViewAnimeDetails,
        ViewAnimeSynopsis,
        ViewAnimeRelated,
        ViewAnimeEpisodes,
        ViewAnimeCharacters,
    },
    created() {
        this.getInfo();
    },
    computed: {
        ...mapGetters(['animeDetails', 'animeEpisodes', 'animeCharacters', 'isLoading'])
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

<style>
div.line {
    margin-bottom: 8px;
}

.return-icon {
    cursor: pointer;
    margin: 10px 0;
}

table {
    font-size: 12px;
}
</style>
