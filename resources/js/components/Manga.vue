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
                                    <tr v-if="details.published">
                                        <td>Published:</td>
                                        <td><v-chip color="teal" dark small>{{ details.published.string }}</v-chip></td>
                                    </tr>
                                    <tr>
                                        <td>Author(s):</td>
                                        <td>
                                            <v-chip color="deep-orange" v-for="author in details.authors" :key="author.mal_id" dark small>{{ author.name }}</v-chip>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Volume(s):</td>
                                        <td><v-chip color="red" dark small>{{ details.volumes }}</v-chip></td>
                                    </tr>
                                    <tr>
                                        <td>Chapter(s):</td>
                                        <td><v-chip color="green" dark small>{{ details.chapters }}</v-chip></td>
                                    </tr>
                                    <tr>
                                        <td>Genre(s):</td>
                                        <td>
                                            <v-chip color="blue" v-for="genre in details.genres" :key="genre.mal_id" dark small>{{ genre.name }}</v-chip>
                                        </td>
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
                    <v-card class="mt-3" v-if="details.background">
                        <v-card-text>
                            <div>
                                <span class="title">Background</span>
                            </div>
                            <div class="mt-3 subheading">
                                {{ details.background }}
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
                                    <v-card>
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
        name: 'Manga',
        props: ['id'],
        data() {
            return {
                details: '',
                characters: '',
            }
        },
        methods: {
            getDetails() {
                axios.get('https://api.jikan.moe/v3/manga/' + this.id)
                .then(response => {
                    this.details = response.data;
                })
                .catch(error => {
                    // console.log(error);
                });
            },
            getCharacters() {
                axios.get('https://api.jikan.moe/v3/manga/' + this.id + '/characters')
                .then(response => {
                    this.characters = response.data.characters;
                })
                .catch(error => {
                    // console.log(error);
                });
            }
        },
        created() {
            this.getDetails()
            this.getCharacters()
        }
    }
</script>
