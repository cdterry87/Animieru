<template>
    <div id="view-anime" class="container">
        <div class="columns">
            <div class="column is-8 is-offset-2">
                <div class="return-icon button is-info" @click="$router.go(-1)">
                    <i class="fa fa-arrow-left"></i> Go Back
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
                                Produced By: <span class="tag is-link" v-for="producer in details.producer" :key="producer.mal_id">{{ producer.title }}</span>
                            </div>
                            <div class="line">
                                Licensed By: <span class="tag is-link" v-for="licensor in details.licensor" :key="licensor.mal_id">{{ licensor.title }}</span>
                            </div>
                            <div class="line">
                                Studio: <span class="tag is-link" v-for="studio in details.studio" :key="studio.mal_id">{{ studio.title }}</span>
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

                <div class="box">
                    <div class="line">
                        <span class="title is-5">Related</span>
                    </div>
                    <div v-for="related in details.related" :key="related.mal_id">
                        <div v-for="rel in related" :key="rel.mal_id">
                            <router-link :to="'/' + rel.type + '/' + rel.mal_id">
                                <strong>{{ rel.title }}</strong> 
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <div class="line">
                        <span class="title is-5">Episodes</span>    
                    </div> 
                    <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Aired Date</th>
                            </tr>
                            <tr v-for="episode in details.episode" :key="episode.id">
                                <td>{{ episode.id }}</td>
                                <td>{{ episode.title }}</td>
                                <td>{{ episode.aired }}</td>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div class="box">
                    <div class="line">
                        <span class="title is-5">Staff / Voice Actors</span>    
                    </div> 
                    <div class="columns is-multiline">
                        <div class="column is-one-quarter" v-for="actor in actors" :key="actor.mal_id">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by5">
                                        <img :src="actor.image_url" class="image">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="subtitle is-5">{{ actor.name }}</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        {{ actor.role }}
                                    </div>
                                </div>
                            </div>
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
          actors: '',
      }
  },
  created() {
    //Getting the anime details + episodes.
    axios.get('https://api.jikan.moe/anime/' + this.id + '/episodes')
    .then(response => {
        this.details = response.data
    })
    .catch(error => {
        console.log(error)
    });

    //Getting the anime details + voice actors.
    axios.get('https://api.jikan.moe/anime/' + this.id + '/characters_staff')
    .then(response => {
        this.actors = response.data.staff
    })
    .catch(error => {
        console.log(error)
    });

  }
}
</script>

<style scoped>
.card {
    width: 100%;
    display: flex;
    flex-direction: column;
}

span.tag {
    margin-right: 5px;
}

div.line {
    margin-bottom: 8px;
}

.content {
    font-size: 12px;
    word-wrap: break-word;
}

.return-icon {
    cursor: pointer;
    margin: 10px 0;
}
</style>
