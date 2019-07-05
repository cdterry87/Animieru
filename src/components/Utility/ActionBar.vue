<template>
    <div id="action-bar" class="navbar field is-grouped">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" @click="home">
                    Animieru
                </a>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                    <div class="navbar-item">
                        <a @click="$router.push('/')">
                            <i class="fa fa-search"></i> Search
                        </a>
                    </div>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <a @click="$router.go(-1)">
                            <i class="fa fa-arrow-left"></i> Back
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActionBar',
    methods: {
        home() {
            this.$store.dispatch('clearSearchResults');
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.navbar {
    box-shadow: 0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1) !important;
}
</style>

