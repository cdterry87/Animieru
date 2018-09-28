<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <div class="line">
                <span class="title is-5">Characters <span class="is-italic">({{ animeCharacters.length }} Characters Found)</span></span>    
            </div> 
            <div class="columns is-multiline is-mobile">
                <div class="column is-one-third-mobile is-one-fifth-desktop" v-for="character in animeCharacters" :key="character.mal_id">
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
    </div>
</template>

<script>
import Loading from './Loading.vue';

export default {
    name: 'ViewAnimeCharacters',
    props: ['animeCharacters', 'isLoading'],
    components: {
        Loading
    }
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
