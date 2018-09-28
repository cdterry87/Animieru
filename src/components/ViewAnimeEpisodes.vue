<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <div class="line">
                <span class="title is-5">Episodes</span>    
            </div> 

            <table class="table is-striped is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Aired Date</th>
                    </tr>
                    <tr v-for="episode in animeEpisodes" :key="episode.id">
                        <td>{{ episode.id }}</td>
                        <td>{{ episode.title }}</td>
                        <td>{{ episode.aired }}</td>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script>
import Loading from './Loading.vue';

export default {
    name: 'ViewAnimeEpisodes',
    props: ['animeEpisodes', 'isLoading'],
    components: {
        Loading
    }
}
</script>
