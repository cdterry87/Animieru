<template>
    <div>
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
</template>

<script>
export default {
    name: 'Message',
    props: ['searchPerforming', 'searchPerformed']
}
</script>

<style scoped>
.fas {
    font-size: 75px !important;
    margin: 25px 0;
}
</style>
