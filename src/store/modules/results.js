/* eslint-disable */
import axios from "axios";

const state = {
    searchCriteria: "",
    searchResults: ""
};

const mutations = {
    UPDATE_SEARCH_RESULTS(state, payload) {
        state.searchType = payload.type;
        state.searchCriteria = payload.criteria;
        state.searchResults = payload.results;
    }
};

const actions = {
    getSearchResults(context, payload) {
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
            });
    }
};

const getters = {
    searchType: state => state.searchType,
    searchCriteria: state => state.searchCriteria,
    searchResults: state => state.searchResults
};

const searchResultsModule = {
    state,
    mutations,
    actions,
    getters
};

export default searchResultsModule;
