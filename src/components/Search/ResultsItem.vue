<template>
    <div id="search-results-item">
        <div v-if="searchType == 'character' || searchType == 'people'">
            <ResultsItemCard :results="searchResults" :type="searchType" />
        </div>
        <div v-else>
            <ResultsItemMedia :results="searchResults" :type="searchType" />
        </div>
    </div>
</template>

<script>
import ResultsItemCard from './ResultsItemCard';
import ResultsItemMedia from './ResultsItemMedia';

export default {
    name: 'ResultsItem',
    props: ['searchType', 'searchResults'],
    components: {
        ResultsItemCard,
        ResultsItemMedia
    }
}
</script>
