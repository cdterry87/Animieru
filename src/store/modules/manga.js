/* eslint-disable */
import axios from "axios";

const state = {
    mangaDetails: "",
    mangaCharacters: "",
    mangaNews: "",
    isLoadingManga: true
};

const mutations = {
    UPDATE_DETAILS(state, payload) {
        state.mangaDetails = payload.details;
    },
    UPDATE_NEWS(state, payload) {
        state.mangaNews = payload.news;
    },
    UPDATE_CHARACTERS(state, payload) {
        state.mangaCharacters = payload.characters;
    },
    START_LOADING(state) {
        state.isLoadingManga = true;
    },
    FINISHED_LOADING(state) {
        state.isLoadingManga = false;
    }
};

const actions = {
    getMangaDetails(context, payload) {
        context.commit("START_LOADING");

        state.mangaDetails = "";
        state.mangaCharacters = "";

        let api_url =
            "https://api.jikan.moe/manga/" + payload.id + "/characters";
        axios
            .get(api_url)
            .then(response => {
                context.commit("UPDATE_DETAILS", {
                    details: response.data
                });
                context.commit("UPDATE_CHARACTERS", {
                    characters: response.data.character
                });
                context.commit("FINISHED_LOADING");
            })
            .catch(error => {
                console.log(error);
            });
    }
};

const getters = {
    mangaDetails: state => state.mangaDetails,
    mangaNews: state => state.mangaNews,
    mangaCharacters: state => state.mangaCharacters,
    isLoadingManga: state => state.isLoadingManga
};

const mangaModule = {
    state,
    mutations,
    actions,
    getters
};

export default mangaModule;
