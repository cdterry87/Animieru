import Search from './components/Search'
import Anime from './components/Anime'
import Manga from './components/Manga'
import Character from './components/Character'
import Person from './components/Person'
import Genres from './components/Genres'
import Genre from './components/Genre'
import Discover from './components/Discover'

export default [
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
    }
]
