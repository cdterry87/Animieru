/* eslint-disable */
import axios from "axios";

const state = {
    animeDetails: "",
    animeCharacters: ""
};

const mutations = {
    UPDATE_ANIME(state, payload) {
        state.animeDetails = payload.details;
    },
    UPDATE_CHARACTERS(state, payload) {
        state.animeCharacters = payload.characters;
    }
};

const actions = {
    getAnimeDetails(context, payload) {
        axios
            .get("https://api.jikan.moe/anime/" + payload.id + "/episodes")
            .then(response => {
                context.commit("UPDATE_ANIME", {
                    details: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    getAnimeCharacters(context, payload) {
        axios
            .get(
                "https://api.jikan.moe/anime/" +
                    payload.id +
                    "/characters_staff"
            )
            .then(response => {
                context.commit("UPDATE_CHARACTERS", {
                    characters: response.data.character
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
};

const getters = {
    animeDetails: state => state.animeDetails,
    animeCharacters: state => state.animeCharacters
};

const animeModule = {
    state,
    mutations,
    actions,
    getters
};

export default animeModule;
