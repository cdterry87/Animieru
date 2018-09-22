<template>
    <div id="search-results-item">
        <article class="media" v-for="result in searchResults" :key="result.mal_id">
            <figure class="media-left">
                <p class="image is-128x128">
                    <img :src="result.image_url" class="image is-128x128">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <div>
                        <strong v-if="result.title.length !== 0">{{ result.title }}</strong> 
                        <strong v-if="result.name.length !== 0">{{ result.name }}</strong>
                        <small v-if="result.anime.length !== 0"> / {{ result.anime[0].title }}</small>
                        <br />
                        <div v-if="result.description.length !== 0">{{ result.description }}</div>
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
