<template>
    <div>
        <v-toolbar flat color="rgba(0,0,0,0)">
            <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
            <div class="hidden-sm-and-down">
                <v-btn to="/" flat>Search</v-btn>
                <v-btn to="/genres" flat>Genres</v-btn>
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
    export default {
        name: 'Toolbar'
    }
</script>
