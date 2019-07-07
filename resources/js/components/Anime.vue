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
                                <v-data-table
                                    :headers="headers"
                                    :items="episodes"
                                    :pagination.sync="pagination"
                                    no-data-text="There are no episodes available."
                                    disable-initial-sort
                                    hide-actions
                                >
                                    <template v-slot:items="props">
                                        <td>{{ props.item.episode_id }}</td>
                                        <td>{{ props.item.title }}</td>
                                        <td><span v-if="props.item.title_japanese">{{ props.item.title_japanese }} ({{ props.item.title_romanji }})</span></td>
                                    </template>
                                </v-data-table>
                            </div>
                        </v-card-text>
                        <v-card-actions class="text-xs-center align-center">
                            <v-btn color="blue" dark v-if="episodesPage > 1" @click="prevEpisodes">Previous</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="blue" dark v-if="episodesPage < episodesLastPage" @click="nextEpisodes">Next</v-btn>
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
    import Toolbar from './Toolbar'
    import Loading from './Loading'
    import ImagePlaceholder from './ImagePlaceholder'

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
                details: '',
                characters: '',
                episodes: '',
                episodesPage: 1,
                episodesLastPage: '',
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
                    // console.log(error);
                    this.loading = false
                    this.retrying = true
                });
            },
            getCharacters() {
                axios.get('https://api.jikan.moe/v3/anime/' + this.id + '/characters_staff')
                .then(response => {
                    this.characters = response.data.characters;
                    this.loadingCharacters = false
                })
                .catch(error => {
                    // console.log(error);
                    this.loadingCharacters = false
                    this.retrying = true
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
                    // console.log(error);
                    this.loadingEpisodes = false
                });
            },
            nextEpisodes() {
                this.episodesPage++
                this.getEpisodes()
            },
            prevEpisodes() {
                this.episodesPage--
                this.getEpisodes()
            },
            retry() {
                this.getDetails()
                this.getCharacters()
                this.getEpisodes()
            }
        },
        created() {
            this.getDetails()
            this.getCharacters()
            this.getEpisodes()
        }
    }
</script>
