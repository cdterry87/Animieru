<template>
    <div id="search-results-item">
        <div v-if="searchType == 'character' || searchType == 'people'">
            <div class="columns is-multiline is-mobile">
                <div class="column is-one-third-mobile is-one-quarter-tablet is-one-quarter-desktop" v-for="result in searchResults" :key="result.mal_id">
                    <router-link :to="'/' + searchType + '/' + result.mal_id">
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
        </div>

        <div v-else>
            <article class="media" v-for="(result, index) in searchResults" :key="index">
                <figure class="media-left">
                    <p class="image is-128x128">
                        <router-link :to="'/' + searchType + '/' + result.mal_id">
                            <img :src="result.image_url" class="image is-128x128">
                        </router-link>
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <div>
                            <router-link :to="'/' + searchType + '/' + result.mal_id">
                                <strong>{{ index+1 }}. {{ result.title }}</strong> 
                            </router-link>
                            <br />
                            <div>{{ result.description }}</div>
                        </div>
                    </div>
                </div>
                <div class="media-right">
                    <a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResultsItem',
    props: ['searchType', 'searchResults']
}
</script>
