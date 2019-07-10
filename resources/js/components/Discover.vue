<template>
    <div>
        <Toolbar />
        <v-container grid-list-md>
            <div class="headline mb-2 mt-2">
                <v-icon>calendar_today</v-icon>
                What's Playing Today?
            </div>
            <Loading v-if="loadingToday" />
            <v-layout v-else row wrap>
                <v-flex xs6 md2 v-for="(t, index) in today.slice(0, 6)" :key="index">
                    <v-card :to="'/anime/' + t.mal_id">
                        <v-img :src="t.image_url" height="200px">
                            <template v-slot:placeholder>
                                <ImagePlaceholder />
                            </template>
                        </v-img>
                        <v-card-actions>{{ t.title | truncate(20) }}</v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
            <div class="headline mb-2 mt-4">
                <v-icon>whatshot</v-icon>
                What's HOT This Season!
            </div>
            <Loading v-if="loadingSeason" />
            <v-layout v-else row wrap>
                <v-flex xs6 md2 v-for="(s, index) in season.slice(0, 12)" :key="index">
                    <v-card :to="'/anime/' + s.mal_id">
                        <v-img :src="s.image_url" height="200px">
                            <template v-slot:placeholder>
                                <ImagePlaceholder />
                            </template>
                        </v-img>
                        <v-card-actions>{{ s.title | truncate(20) }}</v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
            <div class="headline mb-2 mt-4">
                <v-icon>access_alarm</v-icon>
                Coming Soon!
            </div>
            <Loading v-if="loadingTop" />
            <v-layout v-else row wrap>
                <v-flex xs6 md2 v-for="(t, index) in top.slice(0, 12)" :key="index">
                    <v-card :to="'/anime/' + t.mal_id">
                        <v-img :src="t.image_url" height="200px">
                            <template v-slot:placeholder>
                                <ImagePlaceholder />
                            </template>
                        </v-img>
                        <v-card-actions>{{ t.title | truncate(20) }}</v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'
    import Toolbar from './Toolbar'
    import Loading from './Loading'
    import ImagePlaceholder from './ImagePlaceholder'

    export default {
        name: 'Discover',
        components: {
            Toolbar,
            Loading,
            ImagePlaceholder
        },
        data() {
            return {
                loadingSeason: true,
                loadingToday: true,
                loadingTop: true,
                season: '',
                today: '',
                top: '',
                days: [
                    'sunday',
                    'monday',
                    'tuesday',
                    'wednesday',
                    'thursday',
                    'friday',
                    'saturday',
                ],
                date: new Date()
            }
        },
        created() {
            this.getSeason()
            this.getToday()
            this.getTop()
        },
        computed: {
            currentSeason: function() {
                let month = this.date.getMonth()

                if (month >= 3 && month <= 5)   return 'spring'
                if (month >= 6 && month <= 8)   return 'summer'
                if (month >= 9 && month <= 11)  return 'fall'
                                                return 'winter';
            },
            currentDay: function() {
                let dow = this.date.getDay()

                return this.days[dow]
            },
            currentYear: function() {
                return this.date.getFullYear()
            }
        },
        methods: {
            getSeason() {
                this.loadingSeason = true

                axios.get('https://api.jikan.moe/v3/season/' + this.currentYear + '/' + this.currentSeason)
                .then(response => {
                    this.season = response.data.anime;
                    this.loadingSeason = false
                })
                .catch(error => {
                    this.loadingSeason = false
                });
            },
            getToday() {
                this.loadingToday = true

                axios.get('https://api.jikan.moe/v3/schedule/' + this.currentDay)
                .then(response => {
                    this.today = response.data[this.currentDay];
                    this.loadingToday = false
                })
                .catch(error => {
                    this.loadingToday = false
                });
            },
            getTop() {
                 this.loadingTop = true

                axios.get('https://api.jikan.moe/v3/top/anime/1/upcoming')
                .then(response => {
                    this.top = response.data.top;
                    this.loadingTop = false
                })
                .catch(error => {
                    this.loadingTop = false
                });
            }
        }

    }
</script>
