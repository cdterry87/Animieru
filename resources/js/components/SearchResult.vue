<template>
    <div class="full-width">
        <v-flex xs12 md8 offset-md2>
            <v-layout row wrap v-if="selectField == 'anime' || selectField == 'manga'">
                <v-flex xs12 v-for="(result, index) in results" :key="index" >
                    <v-card :to="'/' + selectField + '/' + result.mal_id" class="mb-2">
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
                                    <v-spacer></v-spacer>
                                    <v-btn icon @click="favorite" color="pink accent-2" flat>
                                        <v-icon>favorite</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                <v-card-actions>
                                    {{ result.synopsis }}
                                </v-card-actions>
                                <v-card-actions class="grey--text caption">
                                    <v-layout row v-if="selectField == 'anime'">
                                        <v-flex xs4 v-if="result.episodes > 1">Episodes: {{ result.episodes }}</v-flex>
                                        <v-flex xs4 v-if="result.rated != ''">Rated: {{ result.rated }}</v-flex>
                                        <v-flex xs4 v-if="result.score > 0">Score: {{ result.score }}</v-flex>
                                    </v-layout>
                                    <v-layout v-else>
                                        <v-flex xs4 v-if="result.chapters > 0">Chapters: {{ result.chapters }}</v-flex>
                                        <v-flex xs4 v-if="result.volumes > 0">Volumes: {{ result.volumes }}</v-flex>
                                        <v-flex xs4 v-if="result.score > 0">Score: {{ result.score }}</v-flex>
                                    </v-layout>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row wrap v-else>
                <v-flex xs12 md3 v-for="(result, index) in results" :key="index" >
                    <v-card :to="'/' + selectField + '/' + result.mal_id">
                        <v-img :src="result.image_url" height="250" position="top center">
                            <template v-slot:placeholder>
                                <ImagePlaceholder />
                            </template>
                        </v-img>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="subheading">{{ result.name }}</h3>
                                <div v-if="selectField == 'character'">
                                    <div class="grey--text" v-if="typeof(result.anime[0]) != 'undefined'">
                                        {{ result.anime[0].name | truncate(18) }}
                                    </div>
                                    <div v-else>
                                        <span v-if="typeof(result.manga[0]) != 'undefined'" class="grey--text">
                                            {{ result.manga[0].name | truncate(18) }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
        <div class="text-xs-center" v-if="!showMoreActive && selectField != 'character' && selectField != 'person'">
            <v-btn @click="showMore" :loading="showMoreLoading" dark color="blue">Show More</v-btn>
        </div>
        <SearchResult v-if="showMoreActive" :searchField="searchField" :selectField="selectField" :results="showMoreResults" :nextPage="showMoreNextPage" />
    </div>
</template>

<script>
    import axios from 'axios'
    import SearchResult from './SearchResult'
    import ImagePlaceholder from './ImagePlaceholder'

    export default {
        name: 'SearchResult',
        props: ['searchField', 'selectField', 'results', 'nextPage'],
        components: {
            SearchResult,
            ImagePlaceholder
        },
        data() {
            return {
                showMoreLoading: false,
                showMoreActive: false,
                showMoreResults: '',
                showMoreNextPage: parseInt(this.nextPage) + 1
            }
        },
        methods: {
            showMore() {
                this.showMoreResults = ''
                this.showMoreLoading = true

                axios.get('https://api.jikan.moe/v3/search/' + this.selectField, {
                    params: {
                        q: this.searchField,
                        page: this.nextPage,
                        // genre: 12,
                        // genre_exclude: 0,
                        limit: 50
                    }
                })
                .then(response => {
                    this.showMoreLoading = false
                    if (response.data.results.length > 0) {
                        this.showMoreActive = true
                        this.showMoreResults = response.data.results


                    }
                })
                .catch(error => {
                    this.showMoreLoading = false
                });
            },
            favorite(e) {
                e.preventDefault()
            }
        }

    }
</script>
