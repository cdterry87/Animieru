<template>
    <div>
        <Toolbar />
        <Loading v-if="loading" />
        <v-container v-else grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 md3>
                    <v-card>
                        <v-card-text>
                            <div class="headline">
                                {{ details.name }}
                            </div>
                            <div>
                                <v-img :src="details.image_url">
                                    <template v-slot:placeholder>
                                        <ImagePlaceholder />
                                    </template>
                                </v-img>
                            </div>
                            <table class="caption">
                                <tr v-if="details.birthday != null">
                                    <td>Birthday:</td>
                                    <td>{{ details.birthday.replace('T00:00:00+00:00', '') }}</td>
                                </tr>
                                <tr v-if="details.website_url != null">
                                    <td colspan="2"><a :href="details.website_url" target="_blank">{{ details.website_url }}</a></td>
                                </tr>
                                <tr v-if="details.about != null">
                                    <td colspan="2" v-html="details.about">
                                    </td>
                                </tr>
                            </table>
                        </v-card-text>
                    </v-card>
                    <v-card class="mt-3">
                        <v-card-text>
                            <div class="title">Staff Positions</div>
                            <div class="subheading italic">({{ details.anime_staff_positions.length }} Positions Found)</div>

                            <table class="mt-3">
                                <thead>
                                    <tr>
                                        <td class="bold">Position</td>
                                        <td class="bold">Anime</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="position in details.anime_staff_positions" :key="position.mal_id" class="caption">
                                        <td>{{ position.position }}</td>
                                        <td><router-link :to="'/anime/' + position.anime.mal_id">{{ position.anime.name }}</router-link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 md9>
                    <v-card v-if="details.voice_acting_roles">
                        <v-card-text>
                            <div>
                                <span class="title">Voice Acting Roles <span class="italic">({{ details.voice_acting_roles.length }} Roles Found)</span></span>
                            </div>
                            <v-layout row wrap>
                                <v-flex v-for="role in details.voice_acting_roles" :key="role.mal_id" xs6 sm4 lg3 xl2>
                                    <v-card :to="'/character/' + role.character.mal_id">
                                        <v-img :src="role.character.image_url" max-height="300" position="top center">
                                            <template v-slot:placeholder>
                                               <ImagePlaceholder />
                                            </template>
                                        </v-img>
                                        <v-card-text>
                                            <div class="caption" v-html="role.character.name"></div>
                                            <div class="caption" v-html="role.anime.name"></div>
                                        </v-card-text>
                                    </v-card>
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
        name: 'Person',
        props: ['id'],
        components: {
            Toolbar,
            Loading,
            ImagePlaceholder
        },
        data() {
            return {
                loading: true,
                details: '',
            }
        },
        methods: {
            getDetails() {
                axios.get('https://api.jikan.moe/v3/person/' + this.id)
                .then(response => {
                    this.details = response.data
                    this.loading = false
                })
                .catch(error => {
                    // console.log(error);
                });
            },
        },
        created() {
            this.getDetails()
        }
    }
</script>
