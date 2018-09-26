/* eslint-disable */
import axios from "axios";

const state = {
    characterDetails: ""
};

const mutations = {
    UPDATE_DETAILS(state, payload) {
        state.characterDetails = payload.details;
    }
};

const actions = {
    getCharacterDetails(context, payload) {
        state.characterDetails = "";
        
        axios
            .get("https://api.jikan.moe/character/" + payload.id + "/pictures")
            .then(response => {
                context.commit("UPDATE_DETAILS", {
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
