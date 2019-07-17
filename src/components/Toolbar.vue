<template>
    <div>
        <v-toolbar flat color="rgba(0,0,0,0)">
            <v-toolbar-side-icon class="hidden-md-and-up" @click="openDrawer"></v-toolbar-side-icon>
            <div class="hidden-sm-and-down">
                <v-btn to="/" flat>
                    <v-icon class="mr-2">search</v-icon> Search
                </v-btn>
                <v-btn to="/genres" flat>
                    <v-icon class="mr-2">view_module</v-icon> Genres
                </v-btn>
                <v-btn to="/discover" flat>
                    <v-icon class="mr-2">visibility</v-icon> Discover
                </v-btn>
            </div>
            <v-spacer></v-spacer>
            <div class="hidden-sm-and-down" v-if="$router.currentRoute.name != 'search'">
                <v-btn @click="back" flat>
                    <v-icon class="mr-2">arrow_back</v-icon> Return
                </v-btn>
            </div>
            <v-btn icon class="hidden-md-and-up">
                <v-icon v-if="$router.currentRoute.name != 'search'" @click="back">arrow_back</v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
    import Event from './../events'

    export default {
        name: 'Toolbar',
        methods: {
            openDrawer() {
                Event.$emit('openDrawer', true)
            },
            back() {
                this.$router.go(-1)
            }
        }
    }
</script>
