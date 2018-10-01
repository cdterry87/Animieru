<template>
    <div class="box" id="related">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <div class="line">
                <span class="title is-5">Animeography</span>
            </div>
            <div v-for="animeography in related.animeography" :key="animeography.mal_id">
                <router-link :to="'/anime/' + animeography.mal_id">
                    <strong>{{ animeography.name }}</strong>
                </router-link>
            </div>

            <hr>

            <div class="line">
                <span class="title is-5">Mangaography</span>
            </div>
            <div v-for="mangaography in related.mangaography" :key="mangaography.mal_id">
                <router-link :to="'/manga/' + mangaography.mal_id">
                    <strong>{{ mangaography.name }}</strong>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '../Utility/Loading';

export default {
    name: 'Related',
    props: ['related', 'isLoading'],
    components: {
        Loading
    }
}
</script>