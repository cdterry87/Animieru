<template>
    <div id="view-voice-actor">
        <ActionBar />
        <div class="container">
            <div class="columns">
                <div class="column is-one-quarter">
                    <Details :details="details" :isLoading="isLoading" />

                    <Positions :positions="details.anime_staff_position" v-if="typeof(details.anime_staff_position) !== 'undefined' && details.anime_staff_position.length > 0" :isLoading="isLoading" />
                </div>
                <div class="column is-three-quarters">
                    <Roles :roles="details.voice_acting_role" v-if="typeof(details.voice_acting_role) !== 'undefined' && details.voice_acting_role.length > 0" :isLoading="isLoading" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import ActionBar from '../Utility/ActionBar';
import Loading from '../Utility/Loading';
import Details from './Details';
import Positions from './Positions';
import Roles from './Roles';

export default {
    name: 'ViewVoiceActor',
    props: ['id'],
    data() {
        return {
            details: '',
            isLoading: true
        }
    },
    components: {
        ActionBar,
        Loading,
        Details,
        Positions,
        Roles
    },
    created() {
        this.getInfo();
    },
    watch: {
        '$route' () {
            this.getInfo();
        }
    },
    methods: {
        getInfo() {
            this.isLoading = true;
            axios.get('https://api.jikan.moe/person/' + this.id)
                .then(response => {
                    this.details = response.data;
                    this.isLoading = false;
                })
                .catch(error => {
                    // console.log(error);
                });
        }
    }
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