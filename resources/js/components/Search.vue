<template>
    <div>
        <v-jumbotron :gradient="gradient" dark>
            <Toolbar />
            <v-container>
                <v-layout align-center row wrap>
                    <v-flex text-xs-center xs12>
                        <h1 class="display-1">Animieru</h1>
                        <h2 class="subheading">Search for your favorite Anime, Manga, Characters, and Voice Actors!</h2>

                        <v-container>
                            <v-layout align-center row wrap>
                                <v-flex xs12 md6 offset-md3>
                                    <v-card light>
                                        <v-form method="POST" id="searchForm" @submit.prevent="search()">
                                            <v-card-text>
                                                <v-text-field
                                                    label="Search for your favorite..."
                                                    append-icon="search"
                                                    v-model="searchField"
                                                    hide-details
                                                ></v-text-field>
                                                <v-radio-group v-model="selectField" row :mandatory="true" hide-details @change="changeSearchType">
                                                    <v-radio
                                                        label="Anime"
                                                        color="blue"
                                                        value="anime"
                                                    ></v-radio>
                                                    <v-radio
                                                        label="Manga"
                                                        color="blue"
                                                        value="manga"
                                                    ></v-radio>
                                                    <v-radio
                                                        label="Character"
                                                        color="blue"
                                                        value="character"
                                                    ></v-radio>
                                                    <v-radio
                                                        label="Person"
                                                        color="blue"
                                                        value="person"
                                                    ></v-radio>
                                                </v-radio-group>
                                                <div class="mt-3">
                                                    <v-btn type="submit" color="blue" dark>
                                                        Search
                                                    </v-btn>
                                                    <v-btn color="red" outline dark @click="reset">
                                                        Clear
                                                    </v-btn>
                                                </div>
                                            </v-card-text>
                                        </v-form>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-jumbotron>
        <v-container v-if="searchPerformed" class="mt-4" grid-list-md>
            <v-layout row wrap>
                <v-flex text-xs-center class="title mb-3" xs12>
                    Search Results for "<span class="italic">{{ searchField }}</span>"
                    <div class="caption mt-2">
                        <strong>({{ results.length }} Results)</strong>
                    </div>
                </v-flex>
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
                        <v-flex xs6 sm4 md3 v-for="(result, index) in results" :key="index" >
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
            </v-layout>
            <div class="text-xs-center" v-if="moreResults && selectField != 'character' && selectField != 'person'">
                <v-btn @click="showMore" :loading="showMoreLoading" dark color="blue">Show More</v-btn>
            </div>
        </v-container>
        <Loading v-else-if="loading" />
        <v-container v-else class="mt-4" grid-list-md text-xs-center>
            <v-icon size="125" color="blue">stars</v-icon>
            <h4 class="headline">Your search results will appear here!</h4>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'
    import Toolbar from './Toolbar'
    import Loading from './Loading'
    import ImagePlaceholder from './ImagePlaceholder'

    export default {
        name: 'Search',
        components: {
            Toolbar,
            Loading,
            ImagePlaceholder
        },
        data() {
            return {
                loading: false,
                showMoreLoading: false,
                searchPerformed: false,
                currentPage: 1,
                lastPage: 1,
                searchField: '',
                selectField: 'anime',
                results: '',
                gradient: 'to top, #209CEE, #2a66cc',

            }
        },
        methods: {
            search() {
                if (!_.isEmpty(this.searchField) && !_.isEmpty(this.selectField)) {
                    this.loading = true

                    axios.get('https://api.jikan.moe/v3/search/' + this.selectField, {
                        params: {
                            q: this.searchField,
                            page: 1,
                            // genre: 12,
                            // genre_exclude: 0,
                            limit: 50
                        }
                    })
                    .then(response => {
                        this.searchPerformed = true
                        this.results = response.data.results
                        this.lastPage = response.data.last_page

                        this.loading = false
                    })
                    .catch(error => {
                        this.results = []
                        this.loading = false
                        this.searchPerformed = true
                    });
                }
            },
            showMore() {
                this.currentPage++
                this.showMoreLoading = true

                axios.get('https://api.jikan.moe/v3/search/' + this.selectField, {
                    params: {
                        q: this.searchField,
                        page: this.currentPage,
                        // genre: 12,
                        // genre_exclude: 0,
                        limit: 50
                    }
                })
                .then(response => {
                    Array.prototype.push.apply(this.results, response.data.results);

                    this.showMoreLoading = false
                })
                .catch(error => {
                    this.showMoreLoading = false
                });
            },
            reset() {
                this.results = ''
                this.searchField = ''
                this.selectField = 'anime'
                this.searchPerformed = false
            },
            changeSearchType() {
                this.results = '',
                this.searchPerformed = false
            },
            favorite(e) {
                e.preventDefault()
            }
        },
        computed: {
            moreResults: function() {
                if (this.currentPage == this.lastPage) {
                    return false
                }
                return true
            }
        }
    }
</script>
