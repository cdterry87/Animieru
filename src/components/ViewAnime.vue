<template>
    <div id="view-anime" class="container">
        <div class="columns">
            <div class="column is-8 is-offset-2">
                <div class="return-icon button is-primary" @click="$router.go(-1)">
                    <i class="fa fa-arrow-left is-primary"></i> Go Back to Search
                </div>
                <div class="box">
                    <div class="columns">
                        <div class="column is-9">
                            <div class="line">
                                <span class="title">{{ details.title }}</span>    
                            </div> 
                            <div class="line">
                                <span class="subtitle"> ({{ details.title_english }})</span>    
                                <span class="subtitle"> ({{ details.title_japanese }})</span>    
                            </div>
                            <div class="line">
                                Aired: {{ details.aired_string }} ({{ details.status }})
                            </div>
                            <div class="line">
                                Rating: <span class="tag is-danger">{{ details.rating }}</span>
                            </div>
                            <div class="line">
                                Produced By: <span class="tag is-info" v-for="producer in details.producer" :key="producer.mal_id">{{ producer.title }}</span>
                            </div>
                            <div class="line">
                                Licensed By: <span class="tag is-info" v-for="licensor in details.licensor" :key="licensor.mal_id">{{ licensor.title }}</span>
                            </div>
                            <div class="line">
                                Studio: <span class="tag is-info" v-for="studio in details.studio" :key="studio.mal_id">{{ studio.title }}</span>
                            </div>
                            <div class="line">
                                Genre(s): <span class="tag is-warning" v-for="genre in details.genre" :key="genre.mal_id">{{ genre.title }}</span>
                            </div>
                            <div class="line">
                                Episodes: {{ details.episodes }}
                            </div>
                            
                        </div>
                        <div class="column is-3">
                            <img :src="details.image_url" class="image">
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-12">
                            <p>Synopsis:</p>
                            <p>
                                {{ details.synopsis }}
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ViewAnime',
  props: ['id'],
  data() {
      return {
          details: '',
      }
  },
  created() {
    //Getting the anime details.
    axios.get('https://api.jikan.moe/anime/' + this.id)
    .then(response => {
        this.details = response.data
    })
    .catch(error => {
        console.log(error)
    });

  }
}
</script>

<style scoped>
span.tag {
    margin-right: 5px;
}

div.line {
    margin-bottom: 8px;
}

.image {
    border-radius: 5px;
    box-shadow: 1px 3px 5px #999;
}

.return-icon {
    cursor: pointer;
    margin: 10px 0;
}
</style>
