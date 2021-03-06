<template>
    <div>
        <Toolbar />
        <Loading v-if="loading" />
        <v-container v-else-if="retrying" grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
                    <v-card>
                        <v-card-text class="text-xs-center align-center">
                            <div class="mt-2">
                                Sorry! The details for this page could not be loaded.  Please try again.
                            </div>
                            <v-btn class="mt-3" color="blue" dark @click="retry">Retry</v-btn>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container v-else grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 md5>
                    <v-card>
                        <v-card-text>
                            <v-layout row>
                                <v-flex xs2>
                                    <v-avatar>
                                        <v-img :src="details.image_url">
                                            <template v-slot:placeholder>
                                               <ImagePlaceholder />
                                            </template>
                                        </v-img>
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs10>
                                    <div class="headline">
                                        {{ details.title }}
                                    </div>
                                    <div>
                                        <span class="subheading"> ({{ details.title_english ? details.title_english : 'N/A' }})</span>
                                        <span class="subheading"> ({{ details.title_japanese ? details.title_japanese : 'N/A' }})</span>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <v-divider class="mt-2 mb-2"></v-divider>
                            <table>
                                <tbody>
                                    <tr v-if="details.aired">
                                        <td>Aired:</td>
                                        <td><v-chip color="teal" dark small>{{ details.aired.string }}</v-chip></td>
                                    </tr>
                                    <tr>
                                        <td>Rating:</td>
                                        <td>
                                            <v-chip color="red" dark small>{{ details.rating }}</v-chip>
                                        </td>
                                    </tr>
                                    <tr v-if="details.producers.length > 0">
                                        <td>Producer(s):</td>
                                        <td>
                                            <v-chip color="deep-orange" v-for="producer in details.producers" :key="producer.mal_id" dark small>{{ producer.name }}</v-chip>
                                        </td>
                                    </tr>
                                    <tr  v-if="details.licensors.length > 0">
                                        <td>Licensor(s):</td>
                                        <td>
                                            <v-chip color="deep-purple" v-for="licensor in details.licensors" :key="licensor.mal_id" dark small>{{ licensor.name }}</v-chip>
                                        </td>
                                    </tr>
                                    <tr  v-if="details.studios.length > 0">
                                        <td>Studio(s):</td>
                                        <td>
                                            <v-chip color="green" v-for="studio in details.studios" :key="studio.mal_id" dark small>{{ studio.name }}</v-chip>
                                        </td>
                                    </tr>
                                    <tr  v-if="details.genres.length > 0">
                                        <td>Genre(s):</td>
                                        <td>
                                            <v-chip color="blue" v-for="genre in details.genres" :key="genre.mal_id" dark small>{{ genre.name }}</v-chip>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Episodes:</td>
                                        <td><v-chip color="pink" dark small>{{ details.episodes }}</v-chip></td>
                                    </tr>
                                    <tr>
                                        <td>Score:</td>
                                        <td>
                                            <strong>{{ details.score }} / 10</strong>
                                            <v-progress-linear color="yellow darken-2" :value="(details.score * 10)"></v-progress-linear>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-card-text>
                    </v-card>
                    <v-card class="mt-3" v-if="details.synopsis">
                        <v-card-text>
                            <div>
                                <span class="title">Synopsis</span>
                            </div>
                            <div class="mt-3 subheading">
                                {{ details.synopsis }}
                            </div>
                        </v-card-text>
                    </v-card>
                    <v-card class="mt-3" v-if="episodes.length > 0">
                        <v-card-text v-if="loadingEpisodes">
                            <Loading />
                        </v-card-text>
                        <v-card-text v-else>
                            <div>
                                <span class="title">Episodes</span>
                            </div>
                            <div class="mt-3">
                                <v-list two-line dense>
                                    <template v-for="episode in episodes">
                                        <v-list-tile :key="episode.episode_id" avatar>
                                            <v-list-tile-avatar>
                                                {{ episode.episode_id}}
                                            </v-list-tile-avatar>
                                            <v-list-tile-content>
                                                <v-list-tile-title class="body-1" v-html="episode.title" :title="episode.title"></v-list-tile-title>
                                                <v-list-tile-sub-title v-html="episode.title_japanese" :title="episode.title_japanese"></v-list-tile-sub-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </template>
                                </v-list>
                            </div>
                        </v-card-text>
                        <v-card-actions v-show="moreEpisodes">
                            <v-spacer></v-spacer>
                            <v-btn color="blue" dark :loading="loadingShowMoreEpisodes" @click="showMoreEpisodes">Show More</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12 md7>
                    <v-card>
                        <v-card-text v-if="loadingCharacters">
                            <Loading />
                        </v-card-text>
                        <v-card-text v-else>
                            <div>
                                <span class="title">Characters <span class="italic">({{ characters.length }} Characters Found)</span></span>
                            </div>
                            <v-layout row wrap>
                                <v-flex v-for="character in characters" :key="character.mal_id" xs6 sm4 lg3 xl2>
                                    <v-card :to="'/character/' + character.mal_id">
                                        <v-img :src="character.image_url" max-height="300" position="top center">
                                            <template v-slot:placeholder>
                                               <ImagePlaceholder />
                                            </template>
                                        </v-img>
                                        <v-card-text>
                                            <div class="caption" v-html="character.name"></div>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'
    import Toolbar from './../components/Toolbar'
    import Loading from './../components/Loading'
    import ImagePlaceholder from './../components/ImagePlaceholder'

    export default {
        name: 'Anime',
        props: ['id'],
        components: {
            Toolbar,
            Loading,
            ImagePlaceholder
        },
        data() {
            return {
                loading: true,
                retrying: false,
                loadingCharacters: true,
                loadingEpisodes: true,
                loadingShowMoreEpisodes: false,
                errorCounterDetails: 0,
                errorCounterCharacters: 0,
                errorCounterEpisodes: 0,
                details: '',
                characters: '',
                episodes: '',
                episodesPage: 1,
                episodesLastPage: 1,
                pagination: {
                    rowsPerPage: -1
                },
                headers: [
                    { text: '#', value: 'episode_id' },
                    { text: 'Title', value: 'title' },
                    { text: 'Japanese', value: 'title_japanese' },
                ],
            }
        },
        methods: {
            getDetails() {
                this.loading = true
                this.retrying = false

                axios.get('https://api.jikan.moe/v3/anime/' + this.id)
                .then(response => {
                    this.details = response.data;
                    this.loading = false
                })
                .catch(error => {
                    setTimeout(this.getDetails, 4000)

                    this.errorCounterDetails++

                    if (this.errorCounterDetails > 8) {
                        this.loading = false
                        this.retrying = true
                    }
                });
            },
            getCharacters() {
                axios.get('https://api.jikan.moe/v3/anime/' + this.id + '/characters_staff')
                .then(response => {
                    this.characters = response.data.characters;
                    this.loadingCharacters = false
                })
                .catch(error => {
                    setTimeout(this.getCharacters, 4000)

                    this.errorCounterCharacters++

                    if (this.errorCounterCharacters > 8) {
                        this.loadingCharacters = false
                        this.retrying = true
                    }
                });
            },
            getEpisodes() {
                let page = this.episodesPage

                this.episodes = ''
                this.loadingEpisodes = true

                axios.get('https://api.jikan.moe/v3/anime/' + this.id + '/episodes/' + page)
                .then(response => {
                    this.episodes = response.data.episodes
                    this.episodesLastPage = response.data.episodes_last_page
                    this.loadingEpisodes = false
                })
                .catch(error => {
                    setTimeout(this.getEpisodes, 6000)

                    this.errorCounterEpisodes++

                    if (this.errorCounterEpisodes > 8) {
                        this.loadingEpisodes = false
                    }
                });
            },
            showMoreEpisodes() {
                this.episodesPage++

                this.loadingShowMoreEpisodes = true

                axios.get('https://api.jikan.moe/v3/anime/' + this.id + '/episodes/' + this.episodesPage)
                .then(response => {
                    Array.prototype.push.apply(this.episodes, response.data.episodes);

                    this.loadingShowMoreEpisodes = false
                })
                .catch(error => {
                    loadingShowMoreEpisodes = false
                });
            },
            retry() {
                this.getDetails()
                setTimeout(this.getCharacters, 4000)
                setTimeout(this.getEpisodes, 6000)
            }
        },
        computed: {
            moreEpisodes: function() {
                if (this.episodesPage == this.episodesLastPage) {
                    return false
                }
                return true
            }
        },
        created() {
            this.getDetails()
            setTimeout(this.getCharacters, 4000)
            setTimeout(this.getEpisodes, 6000)
        }
    }
</script>
