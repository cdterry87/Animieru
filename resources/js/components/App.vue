<template>
    <div>
        <v-app class="inspire">
            <router-view></router-view>

            <v-container text-xs-center>
                Developed by <a href="http://chaseterry.com">Chase Terry</a> &copy; 2018 using the <a href="https://jikan.moe" target="_blank">Jikan API</a>
            </v-container>

            <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            light
            >
                <v-list class="pa-1">
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title><a href="/">Animieru</a></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon @click.stop="drawer = false">
                            <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
                <v-list class="pt-0" dense>
                    <v-divider></v-divider>
                    <v-list-tile to="/">
                        <v-list-tile-action>
                            <v-icon>search</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>Search</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile to="/genres">
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>Genres</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <a href="/login">
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon>account_box</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                                <v-list-tile-title>Login</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </a>
                    <v-divider></v-divider>
                    <a href="/register">
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon>assignment</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                                <v-list-tile-title>Register</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </a>
                    <v-divider></v-divider>
                </v-list>
            </v-navigation-drawer>
        </v-app>
    </div>
</template>

<script>
    import Event from './../events'

    export default {
        name: 'App',
        data() {
            return {
                drawer: false
            }
        },
        created() {
             Event.$on('openDrawer', drawer => {
                 this.drawer = drawer
            })
        }
    }
</script>
