<template>
    <div>
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 md5>
                    <v-card>
                        <v-card-text>
                            <v-layout row>
                                <v-flex xs2>
                                    <v-avatar>
                                        <v-img :src="details.image_url"></v-img>
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
                                    <tr>
                                        <td>Producer(s):</td>
                                        <td>
                                            <v-chip color="deep-orange" v-for="producer in details.producers" :key="producer.mal_id" dark small>{{ producer.name }}</v-chip>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Licenser(s):</td>
                                        <td>
                                            <v-chip color="deep-purple" v-for="licensor in details.licensors" :key="licensor.mal_id" dark small>{{ licensor.name }}</v-chip>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Studio(s):</td>
                                        <td>
                                            <v-chip color="green" v-for="studio in details.studios" :key="studio.mal_id" dark small>{{ studio.name }}</v-chip>
                                        </td>
                                    </tr>
                                    <tr>
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
                    <v-card class="mt-3" v-if="episodes">
                        <v-card-text>
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
                                        <td>{{ props.item.title_japanese }} ({{ props.item.title_romanji }})</td>
                                    </template>
                                </v-data-table>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 md7>
                    <v-card>
                        <v-card-text>
                            <div>
                                <span class="title">Characters <span class="italic">({{ characters.length }} Characters Found)</span></span>
                            </div>
                            <v-layout row wrap>
                                <v-flex v-for="character in characters" :key="character.mal_id" xs4 lg3 xl2>
                                    <v-card :to="'/character/' + character.mal_id">
                                        <v-img :src="character.image_url"></v-img>
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

    export default {
        name: 'Anime',
        props: ['id'],
        data() {
            return {
                details: '',
                characters: '',
                episodes: '',
                pagination: {
                    rowsPerPage: -1
                },
                headers: [
                    { text: '#', value: 'episode_id' },
                    { text: 'Title', value: 'title' },
                    { text: 'Title (Japanese)', value: 'title_japanese' },
                ],
            }
        },
        methods: {
            getDetails() {
                axios.get('https://api.jikan.moe/v3/anime/' + this.id)
                .then(response => {
                    this.details = response.data;
                })
                .catch(error => {
                    // console.log(error);
                });
            },
            getCharacters() {
                axios.get('https://api.jikan.moe/v3/anime/' + this.id + '/characters_staff')
                .then(response => {
                    this.characters = response.data.characters;
                })
                .catch(error => {
                    // console.log(error);
                });
            },
            getEpisodes() {
                axios.get('https://api.jikan.moe/v3/anime/' + this.id + '/episodes')
                .then(response => {
                    let episodes = response.data.episodes
                    this.episodes = episodes

                    let last_page = response.data.episodes_last_page

                    if (last_page > 1) {
                        var i;
                        for(i = 2; i <= 2; i++) {
                            // axios.get('https://api.jikan.moe/v3/anime/' + this.id + '/episodes/' + i)
                            // .then(response2 => {

                            // })
                        }
                    }
                })
                .catch(error => {
                    // console.log(error);
                });
            }
        },
        created() {
            this.getDetails()
            this.getCharacters()
            this.getEpisodes()
        }
    }
</script>
