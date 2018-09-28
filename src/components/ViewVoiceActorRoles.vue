<template>
   <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}" v-if="roles">
            <div class="line">
                <span class="title is-5">Voice Acting Roles <span class="is-italic">({{ roles.length }} Roles Found)</span></span> 
            </div> 
            <div class="columns is-multiline is-mobile">
                <div class="column is-one-third-mobile is-one-fifth-desktop" v-for="role in roles" :key="role.mal_id">
                    <router-link :to="'/character/' + role.character.mal_id">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by5">
                                    <img :src="role.character.image_url" class="image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p>{{ role.character.name }}</p>
                                        <p>
                                            <router-link :to="'/anime/' + role.anime.mal_id">
                                                {{ role.anime.name }}
                                            </router-link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from './Loading.vue';

export default {
    name: 'ViewVoiceActorRoles',
    props: ['roles', 'isLoading'],
    components: {
        Loading
    }
}
</script>
