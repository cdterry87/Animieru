<template>
    <div id="details">
        <div class="box">
            <div class="line">
                <span class="title">{{ animeDetails.title }}</span>    
            </div> 
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
            </table>
        </div>
        <div class="box">
            <div class="line">
                <span class="title is-5">Synopsis</span>
            </div>
            <p>
                {{ animeDetails.synopsis }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViewAnimeDetails',
    props: ['animeDetails']
}
</script>

<style scoped>
span.tag {
    margin: 2px 5px 2px 0;
}
</style>
