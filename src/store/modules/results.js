/* eslint-disable */
import axios from "axios";

const state = {
    searchResults: {}
};

const mutations = {
    UPDATE_SEARCH_RESULTS(state, payload) {
        state.searchResults = payload;
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
                // this.result = response;
                context.commit("UPDATE_SEARCH_RESULTS", response);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
};

const getters = {
    searchResults: state => state.searchResults
};

const searchResultsModule = {
    state,
    mutations,
    actions,
    getters
};

export default searchResultsModule;
