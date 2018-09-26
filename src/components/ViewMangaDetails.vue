<template>
    <div class="box">
        <span class="title">
            {{ mangaDetails.title }}
        </span> 
        <div class="line">
            <span class="subtitle"> ({{ mangaDetails.title_english }})</span>    
            <span class="subtitle"> ({{ mangaDetails.title_japanese }})</span>    
        </div>
        <table class="table is-fullwidth">
            <tr>
                <td>Published:</td>
                <td>{{ mangaDetails.published_string }} ({{ mangaDetails.status }})</td>
            </tr>
            <tr>
                <td>Author(s):</td>
                <td><span class="tag is-link" v-for="author in mangaDetails.author" :key="author.mal_id">{{ author.name }}</span></td>
            </tr>
            <tr>
                <td>Genre(s):</td>
                <td><span class="tag is-warning" v-for="genre in mangaDetails.genre" :key="genre.mal_id">{{ genre.title }}</span></td>
            </tr>
            <tr>
                <td>Volumes:</td>
                <td>{{ mangaDetails.volumes }}</td>
            </tr>
            <tr>
                <td>Chapters:</td>
                <td>{{ mangaDetails.chapters }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ViewMangaDetails',
    props: ['mangaDetails']
}
</script>

<style scoped>
span.tag {
    margin: 2px 5px 2px 0;
}
</style>
