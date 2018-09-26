<template>
    <div class="has-text-centered">
        <ActionBar />
        
        <h1 class="title">Sorry. Page Not Found :(</h1>
        <p>Go back and try your search again.</p>
    </div>
</template>

<script>
import ActionBar from './ActionBar.vue';

export default {
  name: 'NotFound',
  components: {
      ActionBar
  }
}
</script>
