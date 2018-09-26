<template>
    <div id="view-manga" class="container">
        <div class="return-icon button is-info" @click="$router.go(-1)">
            <i class="fa fa-arrow-left"></i> Go Back
        </div>
        <div class="columns">
            <div class="column is-5">
                <ViewMangaDetails :mangaDetails="mangaDetails" />

                <div class="box">
                    <div class="line">
                        <span class="title is-5">Synopsis</span>
                    </div>
                    <p>
                        {{ mangaDetails.synopsis }}
                    </p>
                </div>

                <div class="box">
                    <div class="line">
                        <span class="title is-5">Background</span>
                    </div>
                    <p>
                        {{ mangaDetails.background }}
                    </p>
                </div>

                <ViewMangaNews :mangaNews="mangaNews" />
            </div>
            <div class="column is-7">
                <ViewMangaCharacters :mangaCharacters="mangaCharacters" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ViewMangaDetails from './ViewMangaDetails.vue';
import ViewMangaCharacters from './ViewMangaCharacters.vue';

export default {
    name: 'ViewManga',
    props: ['id'],
    components: {
        ViewMangaDetails,
        ViewMangaCharacters,
    },
    created() {
        this.getInfo();
    },
    computed: {
        ...mapGetters(['mangaDetails', 'mangaCharacters'])
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
