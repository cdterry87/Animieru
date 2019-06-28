import Search from './components/Search'
import Anime from './components/Anime'
// import Manga from './components/Manga'
// import Character from './components/Character'
// import Person from './components/Person'
// import NotFound from './components/NotFound'

export default [
    {
        path: '/',
        name: 'search',
        component: Search,
    },
    {
        path: "/anime/:id",
        component: Anime,
        props: true
    },
    // {
    //     path: "/manga/:id",
    //     component: Manga,
    //     props: true
    // },
    // {
    //     path: "/character/:id",
    //     component: Character,
    //     props: true
    // },
    // {
    //     path: "/person/:id",
    //     component: Person,
    //     props: true
    // },
    // {
    //     //Alternate route for voice actors.
    //     path: "/people/:id",
    //     redirect: "/person/:id"
    // },
    // {
    //     path: "*",
    //     component: NotFound
    // }
]
