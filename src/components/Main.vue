<template>
    <div id="main">
        <section class="hero is-info is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-centered">Animieru</h1>
                    <h2 class="title is-5 has-text-centered">Search for your favorite Anime, Characters, or Voice Actors!</h2>
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
import Search from './Search';
import SearchResults from './SearchResults';

export default {
  name: 'ViewAnime',
  components: {
      Search,
      SearchResults
  }
}
</script>

<style scoped>
</style>

