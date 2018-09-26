import Vue from "vue";
import Vuex from "vuex";
import search from "./modules/search";
import anime from "./modules/anime";
import character from "./modules/character";
import manga from "./modules/manga";
import actor from "./modules/actor";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        search,
        anime,
        character,
        manga,
        actor
    }
});
