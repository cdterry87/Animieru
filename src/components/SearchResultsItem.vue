<template>
    <div id="search-results-item">
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
                        <router-link :to="'/actor/' + result.mal_id">
                            <strong>{{ result.name }}</strong>
                        </router-link>
                        <!-- <small> / {{ result.anime[0].title }}</small> -->
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
</template>

<script>
export default {
    name: 'SearchResultsItem',
    props: ['searchType', 'searchResults']
}
</script>

<style scoped>
</style>
