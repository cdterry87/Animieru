<template>
    <div id="app">
        <section class="hero is-info is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-centered">VidQuery</h1>
                    <h2 class="title is-5 has-text-centered">Search for your favorite Movies and TV Shows using TVDB and IMDB!</h2>
                    <div class="columns">
                        <div class="column is-6 is-offset-3">
                            <MediaSearch />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <MediaList />
        </div>
    </div>
</template>

<script>
import MediaSearch from './components/MediaSearch.vue'
import MediaList from './components/MediaList.vue'

export default {
  name: 'app',
  components: {
    MediaSearch,
    MediaList
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
</style>
