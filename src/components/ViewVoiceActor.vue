<template>
    <div id="view-character" class="container">
        <div class="return-icon button is-info" @click="$router.go(-1)">
            <i class="fa fa-arrow-left"></i> Go Back
        </div>
        <div class="columns">
            <div class="column is-3">
                <div class="box" id="actor-details">
                    <div class="title">
                        {{ actorDetails.name }} {{ actorDetails.name_kanji }}
                    </div>
                    <div>
                        <img :src="actorDetails.image_url" class="image" />
                    </div>
                    <div>
                        Birthday: {{ actorDetails.birthday }}
                    </div>
                    <div>
                        Website: {{ actorDetails.website_url }}
                    </div>
                    <div>
                        More: {{ actorDetails.more }}
                    </div>
                </div>
            </div>
            <div class="column is-9">
                <div class="box">
                    <div class="line">
                        <span class="title is-5">Voice Acting Roles</span>    
                    </div> 
                    <table class="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <td>Anime</td>
                                <td>Character(s)</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="role in actorDetails.voice_acting_role" :key="role.mal_id">
                                <td><router-link :to="'/anime/' + role.anime.mal_id">{{ role.anime.name }}</router-link></td>
                                <td><router-link :to="'/character/' + role.character.mal_id">{{ role.character.name }}</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ViewVoiceActor',
    props: ['id'],
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
#actor-details {
    font-size: 12px;
}

#related {
    font-size: 14px;
}
</style>