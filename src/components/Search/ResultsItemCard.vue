<template>
    <div class="columns is-multiline is-mobile">
        <div class="column is-one-third-mobile is-one-quarter-tablet is-one-quarter-desktop" v-for="result in results" :key="result.mal_id">
            <router-link :to="'/' + type + '/' + result.mal_id">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by5">
                            <img :src="result.image_url" class="image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p>{{ result.name }}</p>
                                <div v-if="typeof(result.anime) != 'undefined'">
                                    <div v-for="(anime, index) in result.anime.slice(0,1)" :key="index">
                                        {{ anime.title }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResultsItemard',
    props: ['type', 'results']
}
</script>
