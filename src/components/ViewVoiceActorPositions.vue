<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}" v-if="positions">
            <div class="line">
                <span class="title is-5">Staff Positions</span>
                <div><span class="is-italic">({{ positions.length }} Positions Found)</span></div>
            </div> 
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <td>Position</td>
                        <td>Anime</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(position, index) in positions" :key="index">
                        <td>{{ position.position }}</td>
                        <td>
                            <router-link :to="'/anime/' + position.anime.mal_id">
                                {{ position.anime.name }}
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Loading from './Loading.vue';

export default {
    name: 'ViewVoiceActorPositions',
    props: ['positions', 'isLoading'],
    components: {
        Loading
    }
}
</script>
