<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <div class="line">
                <span class="title is-5">Voice Actors</span>    
            </div> 
            <table class="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Language</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="actor in actors" :key="actor.mal_id">
                        <td><img :src="actor.image_url" class="image"></td>
                        <td><router-link :to="'/actor/' + actor.mal_id">{{ actor.name }}</router-link></td>
                        <td>{{ actor.language }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Loading from '../Utility/Loading';
        
export default {
    name: 'VoiceActors',
    props: ['actors', 'isLoading'],
    components: {
        Loading
    }
}
</script>
