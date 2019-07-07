<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <span class="title">
                {{ details.title }}
            </span> 
            <div class="line">
                <span class="subtitle"> ({{ details.title_english ? details.title_english : 'N/A' }})</span>    
                <span class="subtitle"> ({{ details.title_japanese ? details.title_japanese : 'N/A' }})</span>    
            </div>
            <table class="table is-fullwidth">
                <tr>
                    <td>Aired:</td>
                    <td>{{ details.aired_string }} ({{ details.status }})</td>
                </tr>
                <tr>
                    <td>Rating:</td>
                    <td><span class="tag is-danger">{{ details.rating }}</span></td>
                </tr>
                <tr v-if="details.producer">
                    <td>Producer(s):</td>
                    <td><span class="tag is-primary" v-for="producer in details.producer" :key="producer.mal_id">{{ producer.title }}</span></td>
                </tr>
                <tr v-if="details.licensor">
                    <td>Licensor(s):</td>
                    <td><span class="tag is-link" v-for="licensor in details.licensor" :key="licensor.mal_id">{{ licensor.title }}</span></td>
                </tr>
                <tr v-if="details.studio">
                    <td>Studio(s):</td>
                    <td><span class="tag is-success" v-for="studio in details.studio" :key="studio.mal_id">{{ studio.title }}</span></td>
                </tr>
                <tr v-if="details.genre">
                    <td>Genre(s):</td>
                    <td><span class="tag is-warning" v-for="genre in details.genre" :key="genre.mal_id">{{ genre.title }}</span></td>
                </tr>
                <tr>
                    <td>Episodes:</td>
                    <td>{{ details.episodes }}</td>
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
