<template>
    <div id="search-results" class="columns">
        <div class="column is-8 is-offset-2">
            <h2 class="title is-5 has-text-centered">Search Results <span v-if="searchResults.length !== 0"> for "{{ searchCriteria }}"</span></h2>

            <SearchResultsItem :searchResults="searchResults" />
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
        ...mapGetters(['searchCriteria', 'searchResults'])
    }
}
</script>

