<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
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
                <tr>
                    <td>Score:</td>
                    <td>
                        <strong>{{ mangaDetails.score }} / 10</strong>
                        <br>
                        <progress class="progress is-success" :value="mangaDetails.score" max="10"></progress>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import Loading from './Loading.vue';

export default {
    name: 'ViewMangaDetails',
    props: ['mangaDetails', 'isLoading'],
    components: {
        Loading
    }
}
</script>

