<template>
    <div id="media-list" class="columns">
        <div class="column is-8 is-offset-2">
            <h2 class="title is-5 has-text-centered">Search Results</h2>

            <SearchResultsItem />
        </div>
    </div>
</template>

<script>
import SearchResultsItem from './SearchResultsItem.vue';
import { mapGetters } from 'vuex';

export default {
name: 'SearchResults',
    created() {
        // this.$store.dispatch('getSearchResults');
    },
    components: {
        SearchResultsItem
    },
    computed: {
        ...mapGetters['searchResults']
    }
}
</script>

