<template>
    <div>
        <Toolbar />
        <Loading v-if="loading" />
        <v-container v-else grid-list-md>
            <v-layout row wrap>
                <v-flex text-xs-center class="title mb-3" xs12>
                    Results for <span class="italic">"{{ name }}"</span>
                </v-flex>
                <v-flex xs12 md8 offset-md2>
                    <v-layout row wrap>
                        <v-flex xs12 v-for="(result, index) in results" :key="index" >
                            <v-card :to="'/anime/' + result.mal_id" class="mb-2">
                                <v-layout row>
                                    <v-flex xs5 sm2>
                                        <v-img :src="result.image_url" height="150" contain>
                                            <template v-slot:placeholder>
                                                <ImagePlaceholder />
                                            </template>
                                        </v-img>
                                    </v-flex>
                                    <v-flex xs7 sm10>
                                        <v-card-actions>
                                            <span class="title">{{ result.title | truncate(30) }}</span>
                                            <!--
                                            <v-spacer></v-spacer>
                                            <v-btn icon @click="favorite" color="pink accent-2" flat>
                                                <v-icon>favorite</v-icon>
                                            </v-btn>
                                            -->
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
                </v-flex>
            </v-layout>
            <div class="text-xs-center" v-show="moreResults">
                <v-btn @click="showMore" :loading="showMoreLoading" dark color="blue">Show More</v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'
    import Toolbar from './Toolbar'
    import Loading from './Loading'

    export default {
        name: 'Genre',
        props: ['name', 'id', 'page'],
        components: {
            Toolbar,
            Loading,
        },
        data() {
            return {
                loading: true,
                showMoreLoading: false,
                results: '',
                nextPage: 1,
                moreResults: true,
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
            showMore() {
                this.nextPage++
                this.showMoreLoading = true

                axios.get('https://api.jikan.moe/v3/search/anime', {
                    params: {
                        genre: this.id,
                        page: this.nextPage,
                        order_by: 'score',
                        sort: 'descending',
                        limit: 50
                    }
                })
                .then(response => {
                    if (response.data.results.length > 0) {
                        Array.prototype.push.apply(this.results, response.data.results);
                    } else {
                        this.moreResults = false
                    }

                    this.showMoreLoading = false
                })
                .catch(error => {
                    this.showMoreLoading = false
                });
            }
        },
        mounted() {
            this.search()
        }
    }
</script>
