<template>
    <v-app id="inspire">
        <v-content>
            <div class="text-xs-center mt-4">
                <h1 class="display-1">Animieru</h1>
                <h2 class="title">Search for all things Anime!</h2>
            </div>
            <v-container fluid>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm10 md5>
                        <v-card class="elevation-3">
                            <v-card-text>
                                <h3 class="title text-xs-center mb-3">Login with</h3>
                                <div class="text-xs-center center-align mt-2 mb-2">
                                    <v-btn color="blue darken-4" dark small>Facebook</v-btn>
                                    <v-btn color="light-blue lighten-1" dark small>Twitter</v-btn>
                                    <v-btn color="grey lighten-3" small>Google</v-btn>
                                </div>
                                <div class="mt-4 mb-3 text-xs-center">
                                    or with your Animieru account
                                </div>
                                <v-text-field prepend-icon="mail" id="email" name="email" label="Email" type="text"></v-text-field>
                                <v-text-field prepend-icon="lock" id="password"  name="password" label="Password" type="password"></v-text-field>
                                <v-checkbox id="remember" name="remember" label="Remember Me"></v-checkbox>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" type="submit">Login</v-btn>
                                <v-btn color="deep-purple" dark href="/register">Register</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                            <v-card-actions class="mb-3">
                                <v-spacer></v-spacer>
                                <a href="/password/reset" class="mt-4 mb-4">Forgot Your Password?</a>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>
