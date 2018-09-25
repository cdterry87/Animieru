<template>
    <div class="box">
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
                <tr v-for="episode in animeDetails.episode" :key="episode.id">
                    <td>{{ episode.id }}</td>
                    <td>{{ episode.title }}</td>
                    <td>{{ episode.aired }}</td>
                </tr>
            </thead>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ViewAnimeEpisodes',
    props: ['animeDetails']
}
</script>
