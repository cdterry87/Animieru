<template>
    <div id="media-list" class="columns">
        <div class="column is-8 is-offset-2">
            <h2 class="title is-5 has-text-centered">Search Results</h2>
            
            <MediaListItem />
        </div>
        
    </div>
</template>

<script>
import MediaListItem from './MediaListItem.vue';

export default {
  name: 'MediaList',
  components: {
      MediaListItem
  }
}
</script>

