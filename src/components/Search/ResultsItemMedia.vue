<template>
    <div>
        <article class="media" v-for="(result, index) in results" :key="index">
            <figure class="media-left">
                <p class="image is-128x128">
                    <router-link :to="'/' + type + '/' + result.mal_id">
                        <img :src="result.image_url" class="image is-128x128">
                    </router-link>
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <div>
                        <router-link :to="'/' + type + '/' + result.mal_id">
                            <strong>{{ index+1 }}. {{ result.title }}</strong> 
                        </router-link>
                        <br />
                        <div>{{ result.description }}</div>
                    </div>
                </div>
            </div>
            <div class="media-right">
                <!-- <a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a> -->
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'ResultsItemard',
    props: ['type', 'results']
}
</script>
