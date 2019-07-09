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
            <div class="hidden-sm-and-down">
                <v-btn href="/login" flat>Login</v-btn>
                <v-btn href="/register" flat>Register</v-btn>
            </div>
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
            }
        }
    }
</script>
