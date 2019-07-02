<template>
    <div>
        <Toolbar />
         <v-container grid-list-lg align-center>
            <v-layout row wrap>
                <v-flex xs6 sm4 md3 lg2 v-for="(genre, index) in genres" :key="index">
                    <v-card :to="'/genre/' + genre.name + '/' + genre.id + '/1'" class="text-xs-center" dark :color="colors[Math.round(Math.random() * 50)]">
                        <v-card-text class="title">
                            {{ genre.name }}
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

    export default {
        name: 'Genres',
        props: ['id'],
        components: {
            Toolbar
        },
        data() {
            return {
                colors: [
                    'red', 'red darken-1', 'red darken-3','red accent-2','red accent-3',
                    'pink', 'pink darken-1', 'pink darken-3', 'pink accent-2', 'pink accent-3',
                    'purple', 'purple darken-1', 'purple darken-3', 'purple accent-2', 'purple accent-3',
                    'deep-purple', 'deep-purple darken-1', 'deep-purple darken-3', 'deep-purple accent-2', 'deep-purple accent-3',
                    'indigo', 'indigo darken-1', 'indigo darken-3', 'indigo accent-2', 'indigo accent-3',
                    'blue', 'blue darken-1', 'blue darken-3', 'blue accent-2', 'blue accent-3',
                    'cyan', 'cyan darken-1', 'cyan darken-3',
                    'green', 'green darken-1', 'green darken-3',
                    'teal', 'teal darken-2',
                    'light-green', 'light-green darken-1', 'light-green darken-3',
                    'orange', 'orange darken-1', 'orange darken-3', 'orange accent-2', 'orange accent-3',
                    'deep-orange', 'deep-orange darken-1', 'deep-orange darken-3', 'deep-orange accent-2', 'deep-orange accent-3',
                ],
                genres: [
                    { id: 1, name: 'Action'},
                    { id: 2, name: 'Adventure'},
                    { id: 3, name: 'Cars'},
                    { id: 4, name: 'Comedy'},
                    { id: 5, name: 'Dementia'},
                    { id: 6, name: 'Demons'},
                    { id: 7, name: 'Mystery'},
                    { id: 8, name: 'Drama'},
                    { id: 9, name: 'Ecchi'},
                    { id: 10, name: 'Fantasy'},
                    { id: 11, name: 'Game'},
                    // { id: 12, name: 'Hentai'},
                    { id: 13, name: 'Historical'},
                    { id: 14, name: 'Horror'},
                    { id: 15, name: 'Kids'},
                    { id: 16, name: 'Magic'},
                    { id: 17, name: 'Martial Arts'},
                    { id: 18, name: 'Mecha'},
                    { id: 19, name: 'Music'},
                    { id: 20, name: 'Parody'},
                    { id: 21, name: 'Samurai'},
                    { id: 22, name: 'Romance'},
                    { id: 23, name: 'School'},
                    { id: 24, name: 'Sci Fi'},
                    { id: 25, name: 'Shoujo'},
                    { id: 26, name: 'Shoujo Ai'},
                    { id: 27, name: 'Shounen'},
                    { id: 28, name: 'Shounen Ai'},
                    { id: 29, name: 'Space'},
                    { id: 30, name: 'Sports'},
                    { id: 31, name: 'Super Power'},
                    { id: 32, name: 'Vampire'},
                    { id: 33, name: 'Yaoi'},
                    { id: 34, name: 'Yuri'},
                    { id: 35, name: 'Harem'},
                    { id: 36, name: 'Slice of Life'},
                    { id: 37, name: 'Supernatural'},
                    { id: 38, name: 'Military'},
                    { id: 39, name: 'Police'},
                    { id: 40, name: 'Psychological'},
                    { id: 41, name: 'Thriller'},
                    { id: 42, name: 'Seinen'},
                    { id: 43, name: 'Josei'},
                ]
            }
        },
    }
</script>
