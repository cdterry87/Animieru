<template>
    <div>
        <Toolbar />
        <Loading v-if="loading" />
        <v-container v-else grid-list-md>
            <v-layout row wrap>
                <v-flex text-xs-center class="title mb-3" xs12>
                    Results for <span class="italic">"{{ name }}"</span>
                </v-flex>
                <GenreResult :id="id" :results="results" nextPage="2" />
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'
    import Toolbar from './Toolbar'
    import Loading from './Loading'
    import GenreResult from './GenreResult'

    export default {
        name: 'Genre',
        props: ['name', 'id', 'page'],
        components: {
            Toolbar,
            Loading,
            GenreResult
        },
        data() {
            return {
                loading: true,
                results: ''
            }
        },
        methods: {
            search() {
                this.results = ''

                axios.get('https://api.jikan.moe/v3/search/anime', {
                    params: {
                        genre: this.id,
                        page: this.page,
                        order_by: 'score',
                        sort: 'descending',
                        limit: 50
                    }
                })
                .then(response => {
                    this.results = response.data.results
                    this.loading = false
                })
                .catch(error => {

                });
            },
        },
        mounted() {
            this.search()
        }
    }
</script>
