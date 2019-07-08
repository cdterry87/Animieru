<template>
    <div>
        <Toolbar />
         <v-container grid-list-lg align-center>
            <v-layout row wrap>
                <v-flex xs6 sm4 md3 lg2 v-for="(genre, index) in genres" :key="index">
                    <v-card :to="'/genre/' + genre.name + '/' + genre.id + '/1'" class="text-xs-center" dark :color="colors[Math.round(Math.random() * 50)]">
                        <v-card-text class="title">
                            <i class="genre-icon" :class="genre.icon"></i>
                            <div class="text-xs-center mt-2">
                                {{ genre.name }}
                            </div>
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
                    { id: 1, name: 'Action', icon: 'fas fa-fist-raised' },
                    { id: 2, name: 'Adventure', icon: 'fas fa-dragon' },
                    { id: 3, name: 'Cars', icon: 'fas fa-car' },
                    { id: 4, name: 'Comedy', icon: 'fas fa-grin-squint-tears' },
                    { id: 5, name: 'Dementia', icon: 'fas fa-brain' },
                    { id: 6, name: 'Demons', icon: 'fas fa-skull' },
                    { id: 7, name: 'Mystery', icon: 'fas fa-user-secret' },
                    { id: 8, name: 'Drama', icon: 'fas fa-theater-masks' },
                    { id: 9, name: 'Ecchi', icon: 'fas fa-burn' },
                    { id: 10, name: 'Fantasy', icon: 'fas fa-hat-wizard' },
                    { id: 11, name: 'Game', icon: 'fas fa-gamepad' },
                    // { id: 12, name: 'Hentai', icon: '' },
                    { id: 13, name: 'Historical', icon: 'fas fa-torii-gate' },
                    { id: 14, name: 'Horror', icon: 'fas fa-spider' },
                    { id: 15, name: 'Kids', icon: 'fas fa-baby-carriage' },
                    { id: 16, name: 'Magic', icon: 'fas fa-magic' },
                    { id: 17, name: 'Martial Arts', icon: 'fas fa-fist-raised' },
                    { id: 18, name: 'Mecha', icon: 'fas fa-robot' },
                    { id: 19, name: 'Music', icon: 'fas fa-music' },
                    { id: 20, name: 'Parody', icon: 'fas fa-laugh-wink' },
                    { id: 21, name: 'Samurai', icon: 'fas fa-fist-raised' },
                    { id: 22, name: 'Romance', icon: 'fas fa-heart' },
                    { id: 23, name: 'School', icon: 'fas fa-graduation-cap' },
                    { id: 24, name: 'Sci Fi', icon: 'fas fa-meteor' },
                    { id: 25, name: 'Shoujo', icon: 'fas fa-venus' },
                    { id: 26, name: 'Shoujo Ai', icon: 'fas fa-venus-double' },
                    { id: 27, name: 'Shounen', icon: 'fas fa-mars' },
                    { id: 28, name: 'Shounen Ai', icon: 'fas fa-mars-double' },
                    { id: 29, name: 'Space', icon: 'fas fa-user-astronaut' },
                    { id: 30, name: 'Sports', icon: 'fas fa-football-ball' },
                    { id: 31, name: 'Super Power', icon: 'fas fa-haykal' },
                    { id: 32, name: 'Vampire', icon: 'fas fa-tint' },
                    { id: 33, name: 'Yaoi', icon: 'fas fa-mars-double' },
                    { id: 34, name: 'Yuri', icon: 'fas fa-venus-double' },
                    { id: 35, name: 'Harem', icon: 'fas fa-users' },
                    { id: 36, name: 'Slice of Life', icon: 'fas fa-pizza-slice' },
                    { id: 37, name: 'Supernatural', icon: 'fas fa-ghost' },
                    { id: 38, name: 'Military', icon: 'fas fa-fighter-jet' },
                    { id: 39, name: 'Police', icon: 'fas fa-taxi' },
                    { id: 40, name: 'Psychological', icon: 'fas fa-brain' },
                    { id: 41, name: 'Thriller', icon: 'fas fa-spider' },
                    { id: 42, name: 'Seinen', icon: 'fas fa-mars' },
                    { id: 43, name: 'Josei', icon: 'fas fa-venus' },
                ]
            }
        },
    }
</script>
