<template>
    <div id="view-anime" class="container">
        <ActionBar />
        <div class="columns">
            <div class="column is-5">
                <ViewAnimeDetails :animeDetails="animeDetails" />

                <div class="box">
                    <div class="line">
                        <span class="title is-5">Synopsis</span>
                    </div>
                    <p>
                        {{ animeDetails.synopsis }}
                    </p>
                </div>

                <ViewAnimeRelated :animeDetails="animeDetails" />
                <ViewAnimeEpisodes :animeEpisodes="animeEpisodes" />
            </div>
            <div class="column is-7">
                <ViewAnimeCharacters :animeCharacters="animeCharacters" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ActionBar from './ActionBar.vue';
import ViewAnimeDetails from './ViewAnimeDetails.vue';
import ViewAnimeRelated from './ViewAnimeRelated.vue';
import ViewAnimeEpisodes from './ViewAnimeEpisodes.vue';
import ViewAnimeCharacters from './ViewAnimeCharacters.vue';

export default {
    name: 'ViewAnime',
    props: ['id'],
    components: {
        ActionBar,
        ViewAnimeDetails,
        ViewAnimeRelated,
        ViewAnimeEpisodes,
        ViewAnimeCharacters,
    },
    created() {
        this.getInfo();
    },
    computed: {
        ...mapGetters(['animeDetails', 'animeEpisodes', 'animeCharacters'])
    },
    watch: {
        '$route' (to, from) {
            this.getInfo();
        }
    },
    methods: {
        getInfo() {
            let payload = {
                'id': this.id,
            }

            this.$store.dispatch('getAnimeDetails', payload);
            this.$store.dispatch('getAnimeEpisodes', payload);
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
