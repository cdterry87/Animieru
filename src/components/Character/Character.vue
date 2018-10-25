<template>
    <div id="view-character" class="container">
        <ActionBar />
        <div class="columns is-multiline">
            <div class="column is-12">
                <Details :details="characterDetails" :isLoading="isLoadingCharacter" />
            </div>
            <div class="column is-4">
                <Related :related="characterDetails" :isLoading="isLoadingCharacter" />
            </div>
            <div class="column is-4">
                <VoiceActors :actors="characterDetails.voice_actor" :isLoading="isLoadingCharacter" />
            </div>
            <div class="column is-4">
                <Images :images="characterDetails.image" v-if="typeof(characterDetails.image) !== 'undefined' && characterDetails.image.length > 0" :isLoading="isLoadingCharacter" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ActionBar from '../Utility/ActionBar';
import Details from './Details';
import Images from './Images';
import Related from './Related';
import VoiceActors from './VoiceActors';

export default {
    name: 'Character',
    props: ['id'],
    components: {
        ActionBar,
        Details,
        Images,
        Related,
        VoiceActors,
    },
    created() {
        this.getInfo();
    },
    computed: {
        ...mapGetters(['characterDetails', 'isLoadingCharacter'])
    },
    watch: {
        '$route' () {
            this.getInfo();
        }
    },
    methods: {
        getInfo() {
            let payload = {
                'id': this.id,
            }

            this.$store.dispatch('getCharacterDetails', payload);
        }
    }
}
</script>