<template>
     <div>
        <Toolbar />
        <v-container grid-list-md fill-height>
            <v-layout row wrap>
                <v-flex text-xs-center xs12>
                    <h1 class="display-1 mt-4">Sorry. Page Not Found :(</h1>
                    <p class="mt-4 title">Go back and try your search again.</p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Toolbar from './../components/Toolbar'

export default {
    name: 'NotFound',
    components: {
        Toolbar
    }
}
</script>
