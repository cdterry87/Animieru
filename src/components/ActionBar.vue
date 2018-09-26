<template>
    <div id="action-bar">
        <div class="return-icon button is-info" @click="$router.go(-1)">
            <i class="fa fa-arrow-left"></i> Go Back
        </div>
        <div class="return-icon button is-warning" @click="$router.push('/')">
            <i class="fa fa-search"></i> Search
        </div>
        <div class="return-icon button is-danger" @click="$router.go(+1)">
            <i class="fa fa-arrow-right"></i> Go Forward
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActionBar'
}
</script>

<style scoped>
#action-bar .button {
    margin-right: 10px !important;
}
</style>
