<template>
    <div id="app">
        <router-view></router-view>

        <footer class="has-text-centered">
            Made with <span class="fa fa-heart"></span> by Chase Terry &copy; 2018
        </footer>
    </div>
</template>

<script>
import Search from './components/Search.vue'
import SearchResults from './components/SearchResults.vue'

export default {
    name: 'App',
    components: {
        Search,
        SearchResults,
    },
}
</script>

<style>
html,
body {
    height: 100%;
    background: #f2f6fa !important;
}

table thead {
    font-weight: bold;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.hero-body {
    margin-bottom: 15px !important;
}

.card-content {
    padding: 0.5rem;
    font-size: 12px;
}

.clear {
    clear: both;
}

footer {
    margin-top: 50px;
    margin-bottom: 25px;
}
</style>
