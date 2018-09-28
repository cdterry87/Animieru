<template>
    <div id="search-results" class="columns">
        <div class="column is-8 is-offset-2">
            <div :class="{'is-hidden': !searchPerforming}">
                <p class="subtitle has-text-centered">Searching...</p>
                <img src="../assets/loading_search.gif" class="loading" height="200" width="200">
            </div>

            <div :class="{'is-hidden': searchPerforming}">
                <div v-if="searchResults.length === 0" class="has-text-centered">
                    <div v-if="!searchPerforming && searchPerformed">
                        <span class="fas fa-ban"></span>
                        <div class="subtitle is-4">
                            Sorry! No results were found for the criteria you entered.  Please try again.
                        </div>
                    </div>
                    <div v-else>
                        <span class="fas fa-magic"></span>
                        <div class="subtitle is-4">
                            Your search results will appear here!
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h2 class="title is-4 has-text-centered">
                        <div>
                            Search Results for "<span class="is-italic">{{ searchCriteria }}</span>"
                        </div>
                        <div>
                            <small>({{ searchResults.length }} Results)</small>
                        </div>
                    </h2>
                    <SearchResultsItem :searchResults="searchResults" :searchType="searchType" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from './Loading.vue';
import SearchResultsItem from './SearchResultsItem.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'SearchResults',
    components: {
        SearchResultsItem,
        Loading
    },
    computed: {
        ...mapGetters(['searchType', 'searchCriteria', 'searchResults', 'searchPerforming', 'searchPerformed'])
    }
}
</script>

<style scoped>
.fas {
    font-size: 75px !important;
    margin: 25px 0;
}

small {
    font-size: 12px;
}

img.loading {
    margin: 0 auto;
    display: block;
}
</style>
