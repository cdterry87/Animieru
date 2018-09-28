<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <span class="title">
                {{ animeDetails.title }}
            </span> 
            <div class="line">
                <span class="subtitle"> ({{ animeDetails.title_english }})</span>    
                <span class="subtitle"> ({{ animeDetails.title_japanese }})</span>    
            </div>
            <table class="table is-fullwidth">
                <tr>
                    <td>Aired:</td>
                    <td>{{ animeDetails.aired_string }} ({{ animeDetails.status }})</td>
                </tr>
                <tr>
                    <td>Rating:</td>
                    <td><span class="tag is-danger">{{ animeDetails.rating }}</span></td>
                </tr>
                <tr>
                    <td>Producer(s):</td>
                    <td><span class="tag is-primary" v-for="producer in animeDetails.producer" :key="producer.mal_id">{{ producer.title }}</span></td>
                </tr>
                <tr>
                    <td>Licenser(s):</td>
                    <td><span class="tag is-link" v-for="licensor in animeDetails.licensor" :key="licensor.mal_id">{{ licensor.title }}</span></td>
                </tr>
                <tr>
                    <td>Studio(s):</td>
                    <td><span class="tag is-success" v-for="studio in animeDetails.studio" :key="studio.mal_id">{{ studio.title }}</span></td>
                </tr>
                <tr>
                    <td>Genre(s):</td>
                    <td><span class="tag is-warning" v-for="genre in animeDetails.genre" :key="genre.mal_id">{{ genre.title }}</span></td>
                </tr>
                <tr>
                    <td>Episodes:</td>
                    <td>{{ animeDetails.episodes }}</td>
                </tr>
                <tr>
                    <td>Score:</td>
                    <td>
                        <strong>{{ animeDetails.score }} / 10</strong>
                        <br>
                        <progress class="progress is-success" :value="animeDetails.score" max="10"></progress>
                    </td>
                </tr>
            </table>
        </div>
        
    </div>
</template>

<script>
import Loading from './Loading.vue';

export default {
    name: 'ViewAnimeDetails',
    props: ['animeDetails', 'isLoading'],
    components: {
        Loading
    }
}
</script>
