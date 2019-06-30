<template>
    <div>
        <Toolbar />
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex text-xs-center class="title mb-3" xs12>
                    Results for "<span class="italic">{{ name }}</span>"
                </v-flex>
                <v-flex xs12 md8 offset-md2>
                    <v-layout row wrap>
                        <v-flex xs12 v-for="(result, index) in results" :key="index" >
                            <v-card :to="'/anime/' + result.mal_id" class="mb-2">
                                <v-layout row>
                                    <v-flex xs5 sm2>
                                        <v-img :src="result.image_url" height="150" contain></v-img>
                                    </v-flex>
                                    <v-flex xs7 sm10>
                                        <v-card-actions>
                                            <span class="title">{{ index + 1 }}. {{ result.title | truncate(30) }}</span>
                                            <v-spacer></v-spacer>
                                            <v-btn icon @click="favorite">
                                                <v-icon>favorite</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                        <v-card-actions>
                                            {{ result.synopsis }}
                                        </v-card-actions>
                                        <v-card-actions class="grey--text caption">
                                            <v-layout row>
                                                <v-flex xs4 v-if="result.episodes > 1">Episodes: {{ result.episodes }}</v-flex>
                                                <v-flex xs4 v-if="result.rated != ''">Rated: {{ result.rated }}</v-flex>
                                                <v-flex xs4 v-if="result.score > 0">Score: {{ result.score }}</v-flex>
                                            </v-layout>
                                        </v-card-actions>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <div class="text-xs-center">
                        <v-btn v-if="page > 1" dark color="blue" :to="'/genre/' + name + '/' + id + '/' + (parseInt(page) - 1)">Previous Page</v-btn>
                        <v-btn dark color="blue" :to="'/genre/' + name + '/' + id + '/' + (parseInt(page) + 1)">Next Page</v-btn>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'
    import Toolbar from './Toolbar'

    export default {
        name: 'Genre',
        props: ['name', 'id', 'page'],
        components: {
            Toolbar
        },
        data() {
            return {
                results: ''
            }
        },
        methods: {
            search() {
                axios.get('https://api.jikan.moe/v3/search/anime', {
                    params: {
                        genre: this.id,
                        page: this.page
                    }
                })
                .then(response => {
                    this.results = response.data.results
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
