<template>
    <div>
        <Toolbar />
        <Loading v-if="loading" />
        <v-container v-else-if="retrying" grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
                    <v-card>
                        <v-card-text class="text-xs-center align-center">
                            <div class="mt-2">
                                Sorry! The details for this page could not be loaded.  Please try again.
                            </div>
                            <v-btn class="mt-3" color="blue" dark @click="retry">Retry</v-btn>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container v-else grid-list-md>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card>
                        <v-card-text>
                            <v-layout row>
                                <v-flex xs2 sm1>
                                    <v-avatar>
                                        <v-img :src="details.image_url">
                                            <template v-slot:placeholder>
                                               <ImagePlaceholder />
                                            </template>
                                        </v-img>
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs10 sm11>
                                    <div class="headline">
                                        {{ details.name }} {{ details.name_kanji }}
                                    </div>
                                    <div class="title" v-if="details.nicknames">
                                        <v-chip color="blue" small dark v-for="nickname in details.nicknames" :key="nickname.mal_id">
                                            {{ nickname }}
                                        </v-chip>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <v-divider class="mt-2 mb-2"></v-divider>
                            <div class="body-1" v-html="details.about"></div>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 md4>
                    <v-card>
                        <v-card-text>
                            <div class="title">Animeography</div>
                        </v-card-text>
                        <v-list to="">
                            <v-list-tile
                                v-for="item in details.animeography"
                                :key="item.mal_id"
                                avatar
                                :to="'/anime/' + item.mal_id"
                            >
                                <v-list-tile-avatar>
                                    <img :src="item.image_url">
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                    <v-list-tile-title class="body-1" v-html="item.name"></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                        <v-card-text>
                            <div class="title">Mangaography</div>
                        </v-card-text>
                        <v-list>
                            <v-list-tile
                                v-for="item in details.mangaography"
                                :key="item.mal_id"
                                avatar
                                :to="'/manga/' + item.mal_id"
                            >
                                <v-list-tile-avatar>
                                    <img :src="item.image_url">
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                    <v-list-tile-title class="body-1" v-html="item.name"></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-card>
                </v-flex>
                <v-flex xs12 md4>
                    <v-card>
                        <v-card-text>
                            <div class="title">Voice Actors</div>
                        </v-card-text>
                        <v-list>
                            <v-list-tile
                                v-for="item in details.voice_actors"
                                :key="item.mal_id"
                                avatar
                                :to="'/person/' + item.mal_id"
                            >
                                <v-list-tile-avatar>
                                    <img :src="item.image_url">
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                    <v-list-tile-title class="body-1" v-html="item.name"></v-list-tile-title>
                                </v-list-tile-content>

                                <v-list-tile-action>
                                    <v-list-tile-title class="caption grey--text" v-html="item.language"></v-list-tile-title>
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-list>
                    </v-card>
                </v-flex>
                <v-flex xs12 md4>
                    <v-card>
                        <v-card-text v-if="loadingPictures">
                            <Loading />
                        </v-card-text>
                        <v-card-text v-else>
                            <div class="title">Images</div>
                            <v-layout row wrap>
                                <v-flex xs6 sm4 v-for="picture in pictures" :key="picture.mal_id">
                                    <v-img :src="picture.large">
                                        <template v-slot:placeholder>
                                            <ImagePlaceholder />
                                        </template>
                                    </v-img>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
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
        name: 'Character',
        props: ['id'],
        components: {
            Toolbar,
            Loading,
            ImagePlaceholder
        },
        data() {
            return {
                loading: true,
                errorCounterDetails: 0,
                errorCounterPictures: 0,
                retrying: false,
                loadingPictures: true,
                details: '',
                pictures: ''
            }
        },
        methods: {
            getDetails() {
                this.loading = true
                this.retrying = false

                axios.get('https://api.jikan.moe/v3/character/' + this.id)
                .then(response => {
                    this.details = response.data;
                    this.loading = false
                })
                .catch(error => {
                    setTimeout(this.getDetails, 4000)

                    this.errorCounterDetails++

                    if (this.errorCounterDetails > 8) {
                        this.loading = false
                        this.retrying = true
                    }
                });
            },
            getPictures() {
                axios.get('https://api.jikan.moe/v3/character/' + this.id + '/pictures')
                .then(response => {
                    this.pictures = response.data.pictures;
                    this.loadingPictures = false
                })
                .catch(error => {
                    setTimeout(this.getPictures, 4000)

                    this.errorCounterPictures++

                    if (this.errorCounterPictures > 8) {
                        this.loadingPictures = false
                    }
                });
            },
            retry() {
                this.getDetails()
                this.getPictures()
            }
        },
        created() {
            this.getDetails()
            setTimeout(this.getPictures, 4000)
        }
    }
</script>
