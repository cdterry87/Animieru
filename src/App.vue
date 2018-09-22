<template>
    <div id="app">
        <section class="hero is-info is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-centered">Animieru</h1>
                    <h2 class="title is-5 has-text-centered">Search for your favorite Anime!</h2>
                    <div class="columns">
                        <div class="column is-6 is-offset-3">
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br>
        <div class="container">
            <SearchResults />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Search from './components/Search.vue'
import SearchResults from './components/SearchResults.vue'

export default {
    name: 'app',
    components: {
        Search,
        SearchResults,
    }
}
</script>

<style>
html,
body {
    height: 100%;
    background: #f2f6fa !important;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.hero-body {
    margin-bottom: 15px !important;
}
</style>
