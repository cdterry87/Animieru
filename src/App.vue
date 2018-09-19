<template>
    <div id="app">
        <section class="hero is-info is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-centered">VidQuery</h1>
                    <h2 class="title is-5 has-text-centered">Search for your favorite TV Shows using TVDB!</h2>
                    <div class="columns">
                        <div class="column is-6 is-offset-3">
                            <MediaSearch />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br>
        <div class="container">
            <Error :errors="errors" />

            <MediaList />
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
import MediaSearch from './components/MediaSearch.vue'
import MediaList from './components/MediaList.vue'
import Error from './components/Error.vue'

export default {
  name: 'app',
  components: {
    MediaSearch,
    MediaList,
    Error
  },
  data() {
      return {
          errors: []
      }
  },
  created() {
      console.log('apikey: '+process.env.VUE_APP_APIKEY);
      console.log('userkey: '+process.env.VUE_APP_USERKEY);
      console.log('username: '+process.env.VUE_APP_USERNAME);

    console.log('About to retrieve API token...');

    axios({
        method: 'post',
        url: 'https://api.thetvdb.com/login',
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        data: {
            apikey: process.env.VUE_APP_APIKEY,
            userkey: process.env.VUE_APP_USERKEY,
            username: process.env.VUE_APP_USERNAME,
        },
    })
    .then(response => {
        console.log('API Token: ' + response.token);
        response.header('Access-Control-Allow-Origin', '*');
    })
    .catch(e => {
        console.log('API Token retrieval failed!');
        this.errors.push(e)
    })
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
