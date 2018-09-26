import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";
import ViewAnime from "../components/ViewAnime.vue";
import ViewManga from "../components/ViewManga.vue";
import ViewCharacter from "../components/ViewCharacter.vue";
import ViewVoiceActor from "../components/ViewVoiceActor.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Main
        },
        {
            path: "/anime/:id",
            component: ViewAnime,
            props: true
        },
        {
            path: "/manga/:id",
            component: ViewManga,
            props: true
        },
        {
            path: "/character/:id",
            component: ViewCharacter,
            props: true
        },
        {
            path: "/actor/:id",
            component: ViewVoiceActor,
            props: true
        },
        {
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
