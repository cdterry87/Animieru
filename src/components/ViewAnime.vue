<template>
    <div id="view-anime" class="container">
        <div class="return-icon button is-info" @click="$router.go(-1)">
            <i class="fa fa-arrow-left"></i> Go Back
        </div>
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
                <ViewAnimeEpisodes :animeDetails="animeDetails" />
            </div>
            <div class="column is-7">
                <ViewAnimeCharacters :animeCharacters="animeCharacters" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ViewAnimeDetails from './ViewAnimeDetails.vue';
import ViewAnimeRelated from './ViewAnimeRelated.vue';
import ViewAnimeEpisodes from './ViewAnimeEpisodes.vue';
import ViewAnimeCharacters from './ViewAnimeCharacters.vue';

export default {
    name: 'ViewAnime',
    props: ['id'],
    components: {
        ViewAnimeDetails,
        ViewAnimeRelated,
        ViewAnimeEpisodes,
        ViewAnimeCharacters,
    },
    created() {
        let payload = {
            'id': this.id,
        }

        this.$store.dispatch('getAnimeDetails', payload);
        this.$store.dispatch('getAnimeCharacters', payload);
    },
    computed: {
        ...mapGetters(['animeDetails', 'animeCharacters'])
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
