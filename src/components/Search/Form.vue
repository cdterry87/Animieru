<template>
    <section class="hero is-info is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title has-text-centered">Animieru</h1>
                <h2 class="title is-5 has-text-centered">Search for your favorite Anime, Manga, Characters, or Voice Actors!</h2>
                <div class="columns">
                    <div class="column is-6 is-offset-3">
                        <div class="box">
                            <div class="field has-addons">
                                <div class="control has-icons-left is-expanded">
                                    <input type="text" class="input is-medium" placeholder="Search for Anime, Manga, Characters, or Voice Actors!" @keyup.enter="search()" v-model="searchField">
                                    <span class="icon is-left"><i class="fas fa-search"></i></span>
                                </div>
                                <div class="control">
                                    <button class="button is-info is-medium" @click="search()">Search</button>
                                </div>
                            </div>
                            <div class="control">
                                <label class="radio"><input type="radio" id="radio-anime" value="anime" v-model="selectField"> Anime</label>
                                <label class="radio"><input type="radio" id="radio-manga" value="manga" v-model="selectField"> Manga</label>
                                <label class="radio"><input type="radio" id="radio-character" value="character" v-model="selectField"> Character</label>
                                <label class="radio"><input type="radio" id="radio-person" value="people" v-model="selectField"> Voice Actor</label>
                                <div class="button is-outlined is-danger is-pulled-right" @click="clear()">Clear Search Results</div>
                                <div class="clear"></div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            searchField: '',
            selectField: 'anime',
            result: {}
        }
    },
    methods: {
        search() {
            let payload = {
                'searchField': this.searchField,
                'selectField': this.selectField,
            }

            this.$store.dispatch('getSearchResults', payload);
            this.searchField = '';
        },
        clear() {
            this.$store.dispatch('clearSearchResults');
            this.searchField = '';
        }
    }
}
</script>
