<template>
    <div class="box">
        <div class="line">
            <span class="title is-5">Characters <span class="is-italic">({{ animeCharacters.length }} Characters Found)</span></span>    
        </div> 
        <div class="columns is-multiline">
            <div class="column is-one-fifth" v-for="character in animeCharacters" :key="character.mal_id">
                <router-link :to="'/character/' + character.mal_id">
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
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViewAnimeCharacters',
    props: ['animeCharacters']
}
</script>

<style scoped>
.card {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 12px;
}

.card-content {
    padding: 0.5rem;
}
</style>
