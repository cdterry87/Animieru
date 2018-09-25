/* eslint-disable */
import axios from "axios";

const state = {
    characterDetails: ""
};

const mutations = {
    UPDATE_CHARACTER(state, payload) {
        state.characterDetails = payload.details;
    }
};

const actions = {
    getCharacterDetails(context, payload) {
        axios
            .get("https://api.jikan.moe/character/" + payload.id + "/pictures")
            .then(response => {
                context.commit("UPDATE_CHARACTER", {
                    details: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
};

const getters = {
    characterDetails: state => state.characterDetails
};

const characterModule = {
    state,
    mutations,
    actions,
    getters
};

export default characterModule;
