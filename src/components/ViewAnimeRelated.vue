<template>
    <div class="box" id="related">
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
</template>

<script>
export default {
  name: 'ViewAnimeRelated',
  props: ['animeDetails']
}
</script>

<style scoped>
#related {
    font-size: 14px;
}
</style>
