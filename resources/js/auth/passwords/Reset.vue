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
                                <h3 class="title text-xs-center mb-3">Reset Password</h3>
                                <v-text-field prepend-icon="lock" id="password" name="password" label="Password" type="password"></v-text-field>
                                <v-text-field prepend-icon="lock" id="password_confirmation"  name="password_confirmation" label="Confirm Password" type="password"></v-text-field>
                                <v-checkbox id="remember" name="remember" label="Remember Me"></v-checkbox>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" type="submit">Reset Pasword</v-btn>
                                <v-btn color="deep-purple" dark href="/login">Login</v-btn>
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
        name: 'Reset'
    }
</script>
