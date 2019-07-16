<template>
    <div class="text-xs-center">
        <div class="mt-5 mb-5">
            <v-progress-circular
            :size="150"
            :width="15"
            color="blue"
            indeterminate
            >
            Loading...
            </v-progress-circular>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading'
    }
</script>
