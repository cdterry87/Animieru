<template>
    <div id="view-manga" class="container">
        <ActionBar />
        <div class="columns">
            <div class="column is-5">
                <ViewMangaDetails :mangaDetails="mangaDetails" :isLoading="isLoadingManga"/>
                <ViewMangaSynopsis :mangaDetails="mangaDetails" :isLoading="isLoadingManga" />
                <ViewMangaBackground :mangaDetails="mangaDetails" :isLoading="isLoadingManga" />
            </div>
            <div class="column is-7">
                <ViewMangaCharacters :mangaCharacters="mangaCharacters" :isLoading="isLoadingManga" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ActionBar from './ActionBar.vue';
import ViewMangaDetails from './ViewMangaDetails.vue';
import ViewMangaSynopsis from './ViewMangaSynopsis.vue';
import ViewMangaBackground from './ViewMangaBackground.vue';
import ViewMangaCharacters from './ViewMangaCharacters.vue';

export default {
    name: 'ViewManga',
    props: ['id'],
    components: {
        ActionBar,
        ViewMangaDetails,
        ViewMangaSynopsis,
        ViewMangaBackground,
        ViewMangaCharacters,
    },
    created() {
        this.getInfo();
    },
    computed: {
        ...mapGetters(['mangaDetails', 'mangaCharacters', 'isLoadingManga'])
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

            this.$store.dispatch('getMangaDetails', payload);
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
