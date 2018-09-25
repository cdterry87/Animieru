<template>
    <div id="view-anime" class="container">
        <div class="return-icon button is-info" @click="$router.go(-1)">
            <i class="fa fa-arrow-left"></i> Go Back
        </div>
        <div class="columns">
            <div class="column is-6">
                <div class="box">
                    <div class="line">
                        <span class="title">{{ animeDetails.title }}</span>    
                    </div> 
                    <div class="line">
                        <span class="subtitle"> ({{ animeDetails.title_english }})</span>    
                        <span class="subtitle"> ({{ animeDetails.title_japanese }})</span>    
                    </div>
                    <table class="table is-fullwidth">
                        <tr>
                            <td>Aired:</td>
                            <td>{{ animeDetails.aired_string }} ({{ animeDetails.status }})</td>
                        </tr>
                        <tr>
                            <td>Rating:</td>
                            <td><span class="tag is-danger">{{ animeDetails.rating }}</span></td>
                        </tr>
                        <tr>
                            <td>Produced By:</td>
                            <td><span class="tag is-primary" v-for="producer in animeDetails.producer" :key="producer.mal_id">{{ producer.title }}</span></td>
                        </tr>
                        <tr>
                            <td>Licensed By:</td>
                            <td><span class="tag is-link" v-for="licensor in animeDetails.licensor" :key="licensor.mal_id">{{ licensor.title }}</span></td>
                        </tr>
                        <tr>
                            <td>Studio:</td>
                            <td><span class="tag is-success" v-for="studio in animeDetails.studio" :key="studio.mal_id">{{ studio.title }}</span></td>
                        </tr>
                        <tr>
                            <td>Genre(s):</td>
                            <td><span class="tag is-warning" v-for="genre in animeDetails.genre" :key="genre.mal_id">{{ genre.title }}</span></td>
                        </tr>
                        <tr>
                            <td>Episodes:</td>
                            <td>{{ animeDetails.episodes }}</td>
                        </tr>
                    </table>
                </div>
                <div class="box">
                    <div class="line">
                        <span class="title is-5">Synopsis</span>
                    </div>
                    <p>
                        {{ animeDetails.synopsis }}
                    </p>
                </div>
                <div class="box">
                    <div class="line">
                        <span class="title is-5">Related</span>
                    </div>
                    <div v-for="related in animeDetails.related" :key="related.mal_id">
                        <div v-for="rel in related" :key="rel.mal_id">
                            <router-link :to="'/' + rel.type + '/' + rel.mal_id">
                                <strong>{{ rel.title }}</strong>
                            </router-link>
                            ({{ rel.type }})
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="line">
                        <span class="title is-5">Episodes</span>    
                    </div> 
                    <table class="table is-striped is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Aired Date</th>
                            </tr>
                            <tr v-for="episode in animeDetails.episode" :key="episode.id">
                                <td>{{ episode.id }}</td>
                                <td>{{ episode.title }}</td>
                                <td>{{ episode.aired }}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div class="column is-6">
                <div class="box">
                    <div class="line">
                        <span class="title is-5">Characters / Voice Actors</span>    
                    </div> 
                    <div class="columns is-multiline">
                        <div class="column is-one-quarter" v-for="character in animeCharacters" :key="character.mal_id">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by5">
                                        <img :src="character.image_url" class="image">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content">
                                            <p>{{ character.name }}</p>
                                            <p class="is-italic">
                                                Role: {{ character.role }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal">
                <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Modal title</p>
                            <button class="delete" aria-label="close"></button>
                        </header>
                        <section class="modal-card-body">
                            <!-- Content ... -->
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ViewAnime',
    props: ['id'],
    created() {
        let payload = {
            'id': this.id,
        }

        this.$store.dispatch('getAnimeDetails', payload);
        this.$store.dispatch('getAnimeCharacters', payload);
    },
    computed: {
        ...mapGetters(['animeDetails', 'animeCharacters'])
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

.media-content {
    font-size: 12px;
    word-wrap: break-word;
}

.card-content {
    padding: 1rem;
}

.return-icon {
    cursor: pointer;
    margin: 10px 0;
}

table {
    font-size: 12px;
}
</style>
