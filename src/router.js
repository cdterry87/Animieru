import Vue from 'vue'
import Router from 'vue-router'

import Search from './views/Search'
import Anime from './views/Anime'
import Manga from './views/Manga'
import Character from './views/Character'
import Person from './views/Person'
import Genres from './views/Genres'
import Genre from './views/Genre'
import Discover from './views/Discover'
import NotFound from './views/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'search',
            component: Search,
        },
        {
            path: '/genres',
            name: 'genres',
            component: Genres,
        },
        {
            path: '/genre/:name/:id',
            name: 'genre',
            component: Genre,
            props: true
        },
        {
            path: '/anime/:id',
            component: Anime,
            props: true
        },
        {
            path: '/manga/:id',
            component: Manga,
            props: true
        },
        {
            path: '/character/:id',
            component: Character,
            props: true
        },
        {
            path: '/person/:id',
            component: Person,
            props: true
        },
        {
            path: '/discover',
            name: 'Discover',
            component: Discover,
        },
        {
            path: "*",
            component: NotFound
        }
    ]
})
