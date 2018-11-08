<template>
    <div id="app">
        <router-view></router-view>

        <footer class="has-text-centered">
            Developed by <a href="http://chaseterry.com">Chase Terry</a> &copy; 2018 using the <a href="https://jikan.moe" target="_blank">Jikan API</a>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style>
html,
body {
    height: 100%;
    background: #f2f6fa !important;
}

table, small {
    font-size: 12px !important;
}

table thead {
    font-weight: bold;
}

footer {
    margin-top: 50px;
    margin-bottom: 25px;
}

span.tag {
    margin: 2px 5px 2px 0;
}

div.line {
    margin-bottom: 8px;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.hero-body {
    margin-bottom: 15px !important;
}

.card {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 12px;
}

.card-content {
    padding: 0.5rem !important;
    font-size: 12px;
}

.return-icon {
    cursor: pointer;
    margin: 10px 0;
}

.clear {
    clear: both;
}
</style>
