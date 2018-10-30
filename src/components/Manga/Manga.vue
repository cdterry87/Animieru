<template>
    <div id="view-manga">
        <ActionBar />
        <div class="container">
            <div class="columns">
                <div class="column is-5">
                    <Details :details="details" :isLoading="isLoading"/>
                    <Synopsis :synopsis="details.synopsis" v-if="typeof(details.synopsis) !== 'undefined' && details.synopsis != null" :isLoading="isLoading" />
                    <Background :background="details.background" v-if="typeof(details.background) !== 'undefined' && details.background != null" :isLoading="isLoading" />
                </div>
                <div class="column is-7">
                    <Characters :characters="characters" v-if="typeof(characters) !== 'undefined' && characters.length > 0" :isLoading="isLoading" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ActionBar from '../Utility/ActionBar';
import Details from './Details';
import Synopsis from './Synopsis';
import Background from './Background';
import Characters from './Characters';

export default {
    name: 'Manga',
    props: ['id'],
    data() {
        return {
            details: '',
            characters: '',
            isLoading: true
        }
    },
    components: {
        ActionBar,
        Details,
        Synopsis,
        Background,
        Characters,
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
            axios.get('https://api.jikan.moe/manga/' + this.id + '/characters')
                .then(response => {
                    this.details = response.data;
                    this.characters = response.data.character;
                    this.isLoading = false;
                })
                .catch(error => {
                    // console.log(error);
                });
            }
    }
}
</script>
