<template>
    <div id="view-voice-actor">
        <ActionBar />
        <div v-if="retryMode == true" class="has-text-centered">
            <div class="container">
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <div class="box">
                            <div class="has-text-centered">
                                Sorry, the page could not be loaded.  Please try again.
                            </div>
                            <br>
                            <button class="button is-primary" @click="getInfo()">
                                Retry
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="container">
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
            isLoading: true,
            retryMode: false
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
        setTimeout(this.getInfo, 2000)
    },
    watch: {
        '$route' () {
            this.getInfo();
        }
    },
    methods: {
        getInfo() {
            this.retryMode = false;
            this.isLoading = true;
            axios.get('https://api.jikan.moe/person/' + this.id)
                .then(response => {
                    this.details = response.data;
                    this.isLoading = false;
                })
                .catch(error => {
                    // console.log(error);
                    this.isLoading = false;
                    this.retryMode = true;
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