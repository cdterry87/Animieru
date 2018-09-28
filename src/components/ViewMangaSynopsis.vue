<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <div class="line">
                <span class="title is-5">Synopsis</span>
            </div>
            <p>
                {{ mangaDetails.synopsis }}
            </p>
        </div>
    </div>
</template>

<script>
import Loading from './Loading.vue';

export default {
    name: 'ViewAnimeSynopsis',
    props: ['mangaDetails', 'isLoading'],
    components: {
        Loading
    }
}
</script>

