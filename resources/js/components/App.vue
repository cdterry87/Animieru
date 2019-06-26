<template>
    <div>
        <v-app class="inspire">
            <router-view></router-view>

            <v-container text-xs-center>
                Developed by <a href="http://chaseterry.com">Chase Terry</a> &copy; 2018 using the <a href="https://jikan.moe" target="_blank">Jikan API</a>
            </v-container>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                results: ''
            }
        }
    }
</script>
