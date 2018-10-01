<template>
    <div class="container">
        <div class="columns">
            <div class="column is-8 is-offset-2">
                <Loading :class="{'is-hidden': !searchPerforming}" />
                    
                <div :class="{'is-hidden': searchPerforming}">
                    <div v-if="searchResults.length === 0" class="has-text-centered">
                        <Message :searchPerforming="searchPerforming" :searchPerformed="searchPerformed" />
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
                        <ResultsItem :searchResults="searchResults" :searchType="searchType" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loading from './Loading';
import Message from './Message';
import ResultsItem from './ResultsItem';

export default {
    name: 'Results',
    components: {
        Loading,
        Message,
        ResultsItem
    },
    computed: {
        ...mapGetters(['searchType', 'searchCriteria', 'searchResults', 'searchPerforming', 'searchPerformed'])
    }
}
</script>
