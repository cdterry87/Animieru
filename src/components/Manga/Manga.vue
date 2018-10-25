<template>
    <div id="view-manga" class="container">
        <ActionBar />
        <div class="columns">
            <div class="column is-5">
                <Details :details="mangaDetails" :isLoading="isLoadingManga"/>
                <Synopsis :synopsis="mangaDetails.synopsis" v-if="typeof(mangaDetails.synopsis) !== 'undefined' && mangaDetails.synopsis != null" :isLoading="isLoadingManga" />
                <Background :background="mangaDetails.background" v-if="typeof(mangaDetails.background) !== 'undefined' && mangaDetails.background != null" :isLoading="isLoadingManga" />
            </div>
            <div class="column is-7">
                <Characters :characters="mangaCharacters" v-if="typeof(mangaCharacters) !== 'undefined' && mangaCharacters.length > 0" :isLoading="isLoadingManga" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ActionBar from '../Utility/ActionBar';
import Details from './Details';
import Synopsis from './Synopsis';
import Background from './Background';
import Characters from './Characters';

export default {
    name: 'Manga',
    props: ['id'],
    components: {
        ActionBar,
        Details,
        Synopsis,
        Background,
        Characters,
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
