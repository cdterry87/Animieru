/* eslint-disable */
import axios from "axios";

const state = {
    actorDetails: ""
};

const mutations = {
    UPDATE_DETAILS(state, payload) {
        state.actorDetails = payload.details;
    }
};

const actions = {
    getActorDetails(context, payload) {
        state.actorDetails = "";

        let api_url = "https://api.jikan.moe/person/" + payload.id;
        axios
            .get(api_url)
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
    actorDetails: state => state.actorDetails
};

const actorModule = {
    state,
    mutations,
    actions,
    getters
};

export default actorModule;
