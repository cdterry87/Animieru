import Vue from "vue";
import VueRouter from "vue-router";

import Search from "../components/Search/Search";
import Anime from "../components/Anime/Anime";
import Manga from "../components/Manga/Manga";
import Character from "../components/Character/Character";
import VoiceActor from "../components/VoiceActor/VoiceActor";
import NotFound from "../components/NotFound";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: "/",
            component: Search
        },
        {
            path: "/anime/:id",
            component: Anime,
            props: true
        },
        {
            path: "/manga/:id",
            component: Manga,
            props: true
        },
        {
            path: "/character/:id",
            component: Character,
            props: true
        },
        {
            path: "/actor/:id",
            component: VoiceActor,
            props: true
        },
        {
            //Alternate route for voice actors.
            path: "/people/:id",
            redirect: "/actor/:id"
        },
        {
            path: "*",
            component: NotFound
        }
    ]
});

export default router;
