<template>
    <div id="view-actor" class="container">
        <ActionBar />
        <div class="columns">
            <div class="column is-one-quarter">
                <div class="box" id="actor-details">
                    <Loading :class="{'is-hidden': !isLoadingActor}" />

                    <div :class="{'is-hidden': isLoadingActor}">
                        <div class="title is-5">
                            {{ actorDetails.name }}
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
                                <td colspan="2" v-html="actorDetails.more.replace('\\n', '<br>')">
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <ViewVoiceActorPositions :positions="actorDetails.anime_staff_position" :isLoading="isLoadingActor" />
            </div>
            <div class="column is-three-quarters">
                <ViewVoiceActorRoles :roles="actorDetails.voice_acting_role" :isLoading="isLoadingActor" />
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import ActionBar from './ActionBar.vue';
import Loading from './Loading.vue';
import ViewVoiceActorPositions from './ViewVoiceActorPositions.vue';
import ViewVoiceActorRoles from './ViewVoiceActorRoles.vue';

export default {
    name: 'ViewVoiceActor',
    props: ['id'],
    components: {
        ActionBar,
        Loading,
        ViewVoiceActorPositions,
        ViewVoiceActorRoles
    },
    created() {
        let payload = {
            'id': this.id,
        }

        this.$store.dispatch('getActorDetails', payload);
    },
    computed: {
        ...mapGetters(['actorDetails', 'isLoadingActor'])
    },
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