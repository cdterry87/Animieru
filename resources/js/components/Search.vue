<template>
    <div>
        <v-jumbotron :gradient="gradient" dark>
            <v-toolbar flat color="rgba(0,0,0,0)">
                <v-spacer></v-spacer>
                <v-btn href="/login" flat>Login</v-btn>
                <v-btn href="/register" flat>Register</v-btn>
            </v-toolbar>
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
                                                        <v-icon>search</v-icon>
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
        <v-container v-if="searchPerformed" class="mt-2" grid-list-md>
            <v-layout row wrap>
                <v-flex text-xs-center class="title mb-3" xs12>
                    Search Results for "<span class="italic">{{ searchField }}</span>"
                </v-flex>
                <v-flex xs12 md10 offset-md1>
                    <!-- <v-list three-line class="elevation-2" v-if="selectField == 'anime' || selectField == 'manga'">
                        <v-list-tile avatar v-for="(result, index) in results" :key="index" :to="'/' + selectField + '/' + result.mal_id" class="mb-2">
                            <v-list-tile-avatar>
                                <v-img :src="result.image_url"></v-img>
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title v-html="result.title"></v-list-tile-title>
                                <v-list-tile-sub-title v-if="selectField == 'anime'">
                                    <span class="mr-3">Episodes: {{ result.episodes }}</span>
                                    <span class="mr-3">Rated: {{ result.rated }}</span>
                                    <span>Score: {{ result.score }}</span>
                                </v-list-tile-sub-title>
                                <v-list-tile-sub-title v-if="selectField == 'manga'">
                                    <span class="mr-3">Chapters: {{ result.chapters }}</span>
                                    <span class="mr-3">Volumes: {{ result.volumes }}</span>
                                    <span>Score: {{ result.score }}</span>
                                </v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-btn icon ripple>
                                    <v-icon color="grey lighten-1">favorite</v-icon>
                                </v-btn>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list> -->
                    <v-layout row wrap v-if="selectField == 'anime' || selectField == 'manga'">
                        <v-flex xs12 md4 v-for="(result, index) in results" :key="index" >
                            <v-card>
                                 <v-card-actions class="pa-3">
                                    <span class="subheading">{{ result.title | truncate(30) }}</span>
                                    <v-spacer></v-spacer>
                                    <v-icon>favorite</v-icon>
                                </v-card-actions>
                                <v-divider light></v-divider>
                                <v-layout>
                                    <v-flex xs5>
                                        <v-img
                                        :src="result.image_url"
                                        height="100px"
                                        contain
                                        ></v-img>
                                    </v-flex>
                                    <v-flex xs7>
                                        <v-card-title primary-title>
                                        <div>
                                            <div v-if="selectField == 'anime'">
                                                <div v-if="result.episodes > 1">Episodes: {{ result.episodes }}</div>
                                                <div v-if="result.rated != ''">Rated: {{ result.rated }}</div>
                                                <div v-if="result.score > 0">Score: {{ result.score }}</div>
                                            </div>
                                            <div v-else>
                                                <div v-if="result.chapters > 0">Chapters: {{ result.chapters }}</div>
                                                <div v-if="result.volumes > 0">Volumes: {{ result.volumes }}</div>
                                                <div v-if="result.score > 0">Score: {{ result.score }}</div>
                                            </div>
                                        </div>
                                        </v-card-title>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap v-else>
                        <v-flex xs12 md3 v-for="(result, index) in results" :key="index" >
                            <v-card :to="'/' + selectField + '/' + result.mal_id">
                                <v-img :src="result.image_url" height="200"></v-img>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="subheading">{{ result.name }}</h3>
                                        <div v-if="selectField == 'character'">
                                            <div class="grey--text" v-if="typeof(result.anime[0]) != 'undefined'">
                                                {{ result.anime[0].name | truncate(20) }}
                                            </div>
                                            <div v-else>
                                                <span v-if="typeof(result.manga[0]) != 'undefined'" class="grey--text">
                                                    {{ result.manga[0].name | truncate(20) }}
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
        </v-container>
        <v-container v-else class="mt-2" grid-list-md text-xs-center>
            <v-icon size="125" color="blue">stars</v-icon>
            <h4 class="headline">Your search results will appear here!</h4>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Search',
        data() {
            return {
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
                    axios.get('https://api.jikan.moe/v3/search/' + this.selectField, {
                        params: {
                            q: this.searchField
                        }
                    })
                    .then(response => {
                        this.searchPerformed = true
                        this.results = response.data.results
                    })
                    .catch(error => {

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
            }
        }
    }
</script>
