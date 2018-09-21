<template>
    <div id="app">
        <section class="hero is-info is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-centered">VidQuery</h1>
                    <h2 class="title is-5 has-text-centered">Search for your favorite TV Shows using TVDB!</h2>
                    <div class="columns">
                        <div class="column is-6 is-offset-3">
                            <MediaSearch :token="token"/>
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
/* eslint-disable */

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
          token: '',
          errors: []
      }
  },
  created() {
    axios.get('http://vidquery.chaseterry.com/auth')
    .then(response => {
        let token = response.data.token;
        console.log('API Token: ' + token);

        this.token = token;
    })
    .catch(error => {
        console.log('API Token retrieval failed! ' + error);
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
