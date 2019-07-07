/* eslint-disable */
import axios from "axios";

const state = {
    searchType: "",
    searchCriteria: "",
    searchResults: "",
    searchPerforming: false,
    searchPerformed: false
};

const mutations = {
    UPDATE_SEARCH_RESULTS(state, payload) {
        state.searchType = payload.type;
        state.searchCriteria = payload.criteria;
        state.searchResults = payload.results;
        state.searchPerforming = false;
        state.searchPerformed = true;
    },
    START_SEARCHING(state) {
        state.searchPerforming = true;
    },
    CLEAR_SEARCH_RESULTS(state) {
        state.searchType = "";
        state.searchCriteria = "";
        state.searchResults = "";
        state.searchPerforming = false;
        state.searchPerformed = false;
    }
};

const actions = {
    getSearchResults(context, payload) {
        context.commit("START_SEARCHING");

        let api_url = "https://api.jikan.moe/search/".concat(
            payload.selectField
        );
        axios
            .get(api_url, {
                params: {
                    q: payload.searchField
                }
            })
            .then(response => {
                context.commit("UPDATE_SEARCH_RESULTS", {
                    type: payload.selectField,
                    criteria: payload.searchField,
                    results: response.data.result
                });
            })
            .catch(error => {
                console.log(error);
                context.commit("UPDATE_SEARCH_RESULTS", {
                    type: payload.selectField,
                    criteria: payload.searchField,
                    results: [],
                });
            });
    },
    clearSearchResults(context) {
        context.commit("CLEAR_SEARCH_RESULTS");
    }
};

const getters = {
    searchType: state => state.searchType,
    searchCriteria: state => state.searchCriteria,
    searchResults: state => state.searchResults,
    searchPerforming: state => state.searchPerforming,
    searchPerformed: state => state.searchPerformed
};

const searchResultsModule = {
    state,
    mutations,
    actions,
    getters
};

export default searchResultsModule;
