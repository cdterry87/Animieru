<template>
    <div id="action-bar" class="navbar field is-grouped is-grouped-centered">
        <div class="control">
            <button class="return-icon button is-info" @click="$router.go(-1)">
                <i class="fa fa-arrow-left"></i> Back
            </button>
        </div>
        <div class="control">
            <button class="return-icon button is-warning" @click="$router.push('/')">
                <i class="fa fa-search"></i> Search
            </button>
        </div>
        <div class="control">
            <button class="return-icon button is-danger" @click="$router.go(+1)">
                Forward<i class="fa fa-arrow-right"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActionBar'
}
</script>

<style scoped>
.navbar {
    box-shadow: 0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1) !important;
}
</style>

