/* eslint-disable */
import axios from "axios";

const state = {
    animeDetails: "",
    animeEpisodes: "",
    animeCharacters: "",
    isLoading: true
};

const mutations = {
    UPDATE_DETAILS(state, payload) {
        state.animeDetails = payload.details;
    },
    UPDATE_EPISODES(state, payload) {
        state.animeEpisodes = payload.episodes;
    },
    UPDATE_CHARACTERS(state, payload) {
        state.animeCharacters = payload.characters;
    },
    START_LOADING(state) {
        state.isLoading = true;
    },
    FINISHED_LOADING(state) {
        state.isLoading = false;
    }
};

const actions = {
    getAnimeDetails(context, payload) {
        context.commit("START_LOADING");

        state.animeDetails = "";
        state.animeCharacters = "";

        let api_url =
            "https://api.jikan.moe/anime/" + payload.id + "/characters_staff";
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
    },
    getAnimeEpisodes(context, payload) {
        state.animeEpisodes = "";
        let api_url = "https://api.jikan.moe/anime/" + payload.id + "/episodes";
        axios
            .get(api_url)
            .then(response => {
                context.commit("UPDATE_EPISODES", {
                    episodes: response.data.episode
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
};

const getters = {
    animeDetails: state => state.animeDetails,
    animeEpisodes: state => state.animeEpisodes,
    animeCharacters: state => state.animeCharacters,
    isLoading: state => state.isLoading
};

const animeModule = {
    state,
    mutations,
    actions,
    getters
};

export default animeModule;
