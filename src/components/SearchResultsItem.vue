<template>
    <div id="search-results-item">
        <div v-if="searchType == 'character' || searchType == 'people'">
            <div class="columns is-multiline">
                <div class="column is-one-quarter" v-for="result in searchResults" :key="result.mal_id">
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
                                        <p class="is-italic" v-if="typeof(result.anime) != 'undefined'">
                                            {{ result.anime[0].title }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div v-else>
            <article class="media" v-for="result in searchResults" :key="result.mal_id">
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
                                <strong>{{ result.title }}</strong> 
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
    name: 'SearchResultsItem',
    props: ['searchType', 'searchResults']
}
</script>

<style scoped>
</style>
