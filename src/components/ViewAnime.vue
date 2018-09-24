<template>
    <div id="view-anime" class="container">
        <span class="return-icon" @click="$router.go(-1)">
            <i class="fa fa-arrow-left is-primary"></i>
        </span>
        This is the anime page. {{ id }}
    </div>
</template>

<script>
export default {
  name: 'ViewAnime',
  props: ['id'],
  created() {
      console.log('Created anime page.');
  }
}
</script>

<style scoped>
.return-icon {
    cursor: pointer;
}
</style>
