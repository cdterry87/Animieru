/* eslint-disable */
import axios from "axios";

const state = {
    characterDetails: "",
    isLoadingCharacter: true
};

const mutations = {
    UPDATE_DETAILS(state, payload) {
        state.characterDetails = payload.details;
    },
    START_LOADING(state) {
        state.isLoadingCharacter = true;
    },
    FINISHED_LOADING(state) {
        state.isLoadingCharacter = false;
    }
};

const actions = {
    getCharacterDetails(context, payload) {
        context.commit("START_LOADING");

        state.characterDetails = "";
        
        axios
            .get("https://api.jikan.moe/character/" + payload.id + "/pictures")
            .then(response => {
                context.commit("UPDATE_DETAILS", {
                    details: response.data
                });

                context.commit("FINISHED_LOADING");
            })
            .catch(error => {
                console.log(error);
            });
    }
};

const getters = {
    characterDetails: state => state.characterDetails,
    isLoadingCharacter: state => state.isLoadingCharacter
};

const characterModule = {
    state,
    mutations,
    actions,
    getters
};

export default characterModule;
