/* eslint-disable */
import axios from "axios";

const state = {
    actorDetails: "",
    isLoadingActor: true
};

const mutations = {
    UPDATE_DETAILS(state, payload) {
        state.actorDetails = payload.details;
    },
    START_LOADING(state) {
        state.isLoadingActor = true;
    },
    FINISHED_LOADING(state) {
        state.isLoadingActor = false;
    }
};

const actions = {
    getActorDetails(context, payload) {
        context.commit("START_LOADING");

        state.actorDetails = "";

        let api_url = "https://api.jikan.moe/person/" + payload.id;
        axios
            .get(api_url)
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
    actorDetails: state => state.actorDetails,
    isLoadingActor: state => state.isLoadingActor
};

const actorModule = {
    state,
    mutations,
    actions,
    getters
};

export default actorModule;
