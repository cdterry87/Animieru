<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <span class="title">
                {{ details.title }}
            </span> 
            <div class="line">
                <span class="subtitle"> ({{ details.title_english }})</span>    
                <span class="subtitle"> ({{ details.title_japanese }})</span>    
            </div>
            <table class="table is-fullwidth">
                <tr>
                    <td>Published:</td>
                    <td>{{ details.published_string }} ({{ details.status }})</td>
                </tr>
                <tr>
                    <td>Author(s):</td>
                    <td><span class="tag is-link" v-for="author in details.author" :key="author.mal_id">{{ author.name }}</span></td>
                </tr>
                <tr>
                    <td>Genre(s):</td>
                    <td><span class="tag is-warning" v-for="genre in details.genre" :key="genre.mal_id">{{ genre.title }}</span></td>
                </tr>
                <tr>
                    <td>Volumes:</td>
                    <td>{{ details.volumes }}</td>
                </tr>
                <tr>
                    <td>Chapters:</td>
                    <td>{{ details.chapters }}</td>
                </tr>
                <tr>
                    <td>Score:</td>
                    <td>
                        <strong>{{ details.score }} / 10</strong>
                        <br>
                        <progress class="progress is-success" :value="details.score" max="10"></progress>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import Loading from '../Utility/Loading';

export default {
    name: 'Details',
    props: ['details', 'isLoading'],
    components: {
        Loading
    }
}
</script>

