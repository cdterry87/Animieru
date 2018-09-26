<template>
    <div id="search-results" class="columns">
        <div class="column is-8 is-offset-2">
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
                        Your search results will appear below!
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
</template>

<script>
import SearchResultsItem from './SearchResultsItem.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'SearchResults',
    components: {
        SearchResultsItem
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
</style>
