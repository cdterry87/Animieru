<template>
    <div id="media-search">
        <div class="box">
            <div class="field has-addons">
                <div class="control has-icons-left is-expanded">
                    <input type="text" class="input is-medium" placeholder="Search for a TV Show!" @keyup.enter="search()" v-model="name">
                    <span class="icon is-left"><i class="fas fa-search"></i></span>
                </div>
                <div class="control">
                    <button class="button is-info is-medium" @click="search()">Search</button>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>

/* eslint-disable */
import axios from 'axios';

export default {
  name: 'MediaSearch',
  data() {
      return {
          name: '',
          result: {}
      }
  },
  methods: {
    search() {
        axios.get('https://api.jikan.moe/search/anime', {
            params: {
                'q': this.name
            }
        })
        .then(response => {
            console.log('Response: ' + JSON.stringify(response));
            this.result = response
        })
        .catch(error => {
            console.log('Search Error!' + error);
        })

        this.name = '';
    }
        
  }
}

</script>

