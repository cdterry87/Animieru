<template>
    <div id="loading has-text-centered">
        <p class="subtitle has-text-centered">Loading...</p>
        <img src="../assets/loading.gif" class="loading" height="200" width="200">
    </div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style scoped>
.subtitle {
    margin-bottom: 0 !important;
}
img.loading {
    margin: 0 auto;
    display: block;
}
</style>
