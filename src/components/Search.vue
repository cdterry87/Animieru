<template>
    <div id="search">
        <div class="box">
            <div class="field has-addons">
                <div class="control has-icons-left is-expanded">
                    <input type="text" class="input is-medium" placeholder="Search for an Anime, Character, or Voice Actor!" @keyup.enter="search()" v-model="searchField">
                    <span class="icon is-left"><i class="fas fa-search"></i></span>
                </div>
                <div class="control">
                    <button class="button is-info is-medium" @click="search()">Search</button>
                </div>
            </div>
            <div class="control">
                <label class="radio"><input type="radio" id="radio-anime" value="anime" v-model="selectField"> Anime</label>
                <label class="radio"><input type="radio" id="radio-character" value="character" v-model="selectField"> Character</label>
                <label class="radio"><input type="radio" id="radio-person" value="people" v-model="selectField"> Voice Actor</label>
            </div>
        </div>    
    </div>    
</template>

<script>
import axios from 'axios';

export default {
    name: 'MediaSearch',
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
        }
    }
}

</script>

