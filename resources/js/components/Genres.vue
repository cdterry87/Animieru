<template>
    <div>
        <Toolbar />
         <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex xs12>
                    Genres
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'
    import Toolbar from './Toolbar'

    export default {
        name: 'Genres',
        props: ['id'],
        components: {
            Toolbar
        },
        data() {
            return {
                genres: ''
            }
        },
        methods: {
            getGenres() {
                axios.get('https://api.jikan.moe/v3/genre/anime/1/')
                .then(response => {
                    this.genres = response.data;
                })
                .catch(error => {
                    // console.log(error);
                });
            }
        },
        created() {
            this.getGenres()
        }
    }
</script>
