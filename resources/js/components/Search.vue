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
                <SearchResult :searchField="searchField" :selectField="selectField" :results="results" :nextPage="2" />
            </v-layout>
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
    import SearchResult from './SearchResult'

    export default {
        name: 'Search',
        components: {
            Toolbar,
            Loading,
            SearchResult
        },
        data() {
            return {
                loading: false,
                searchPerformed: false,
                searchField: '',
                selectField: 'anime',
                results: '',
                gradient: 'to top, #209CEE, #2a66cc'
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

                        this.loading = false
                    })
                    .catch(error => {
                        this.results = []
                        this.loading = false
                        this.searchPerformed = true
                    });
                }
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
        }
    }
</script>
