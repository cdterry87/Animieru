<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <div class="line">
                <span class="title is-5">Synopsis</span>
            </div>
            <p>
                {{ animeDetails.synopsis }}
            </p>
        </div>
    </div>
</template>

<script>
import Loading from './Loading.vue';

export default {
    name: 'ViewAnimeSynopsis',
    props: ['animeDetails', 'isLoading'],
    components: {
        Loading
    }
}
</script>

