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
                    <p>
                        <strong>{{ result.title }}</strong> 
                        <strong v-if="result.name">{{ result.name }}</strong>
                        <small v-if="result.anime"> / {{ result.anime[0].title }}</small>
                        <br>
                        <p>
                            {{ result.description }}
                        </p>
                    </p>
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
    props: ['searchResults']
}
</script>
