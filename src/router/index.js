import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";
import ViewAnime from "../components/ViewAnime.vue";
import ViewEpisode from "../components/ViewEpisode.vue";
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
            path: "/episode/:id",
            component: ViewEpisode,
            props: true
        },
        {
            path: "/actor/:id",
            component: ViewVoiceActor,
            props: true
        },
        {
            path: "*",
            component: NotFound
        }
    ]
});

export default router;
