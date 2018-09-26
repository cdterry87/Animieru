<template>
    <div id="view-actor" class="container">
        <ActionBar />
        <div class="columns">
            <div class="column is-3">
                <div class="box" id="actor-details">
                    <div class="title is-5">
                        {{ actorDetails.name }} {{ actorDetails.name_kanji }}
                    </div>
                    <div>
                        <img :src="actorDetails.image_url" class="image" id="actor-image"/>
                    </div>
                    <table class="table is-fullwidth">
                        <tr v-if="actorDetails.birthday != null">
                            <td>Birthday:</td>
                            <td>{{ actorDetails.birthday.replace('T00:00:00+00:00', '') }}</td>
                        </tr>
                        <tr v-if="actorDetails.website_url != null">
                            <td colspan="2"><a :href="actorDetails.website_url" target="_blank">{{ actorDetails.website_url }}</a></td>
                        </tr>
                        <tr v-if="actorDetails.more != null">
                            <td colspan="2" v-html="actorDetails.more"></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="column is-9">
                <div class="box">
                    <div class="line">
                        <span class="title is-5">Voice Acting Roles</span>    
                    </div> 
                    <div class="columns is-multiline">
                        <div class="column is-one-fifth" v-for="role in actorDetails.voice_acting_role" :key="role.mal_id">
                            <router-link :to="'/character/' + role.character.mal_id">
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-4by5">
                                            <img :src="role.character.image_url" class="image">
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p>{{ role.character.name }}</p>
                                                <p>
                                                    <router-link :to="'/anime/' + role.anime.mal_id">
                                                        {{ role.anime.name }}
                                                    </router-link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ActionBar from './ActionBar.vue';

export default {
    name: 'ViewVoiceActor',
    props: ['id'],
    components: {
        ActionBar
    },
    created() {
        let payload = {
            'id': this.id,
        }

        this.$store.dispatch('getActorDetails', payload);
    },
    computed: {
        ...mapGetters(['actorDetails'])
    }
}
</script>

<style scoped>
#actor-details .title {
    margin-bottom: 5px !important;
}

#actor-image {
    width: 100%;
    box-shadow: 1px 3px 6px #999;
    margin-bottom: 10px !important;
}

#actor-details {
    font-size: 12px;
}

#related {
    font-size: 14px;
}
</style>