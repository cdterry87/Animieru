<template>
    <div class="container">
        <ActionBar />
        <div class="columns">
            <div class="column is-one-quarter">
                <Details :details="actorDetails" :isLoading="isLoadingActor" />

                <Positions :positions="actorDetails.anime_staff_position" v-if="typeof(actorDetails.anime_staff_position) !== 'undefined' && actorDetails.anime_staff_position.length > 0" :isLoading="isLoadingActor" />
            </div>
            <div class="column is-three-quarters">
                <Roles :roles="actorDetails.voice_acting_role" v-if="typeof(actorDetails.voice_acting_role) !== 'undefined' && actorDetails.voice_acting_role.length > 0" :isLoading="isLoadingActor" />
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import ActionBar from '../Utility/ActionBar';
import Loading from '../Utility/Loading';
import Details from './Details';
import Positions from './Positions';
import Roles from './Roles';

export default {
    name: 'ViewVoiceActor',
    props: ['id'],
    components: {
        ActionBar,
        Loading,
        Details,
        Positions,
        Roles
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
.title {
    margin-bottom: 5px !important;
}

.image {
    width: 100%;
    box-shadow: 1px 3px 6px #999;
    margin-bottom: 10px !important;
}

.table {
    font-size: 12px;
}
</style>