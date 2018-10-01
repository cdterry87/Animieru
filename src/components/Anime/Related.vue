<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <div class="line">
                <span class="title is-5">Related</span>
            </div>
            <div v-for="rel in related" :key="rel.mal_id">
                <div v-for="r in rel" :key="r.mal_id">
                    <router-link :to="'/' + r.type + '/' + r.mal_id">
                        <strong>{{ r.title }}</strong>
                    </router-link>
                    ({{ r.type }})
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '../Utility/Loading';

export default {
    name: 'Related',
    props: ['related', 'isLoading'],
    components: {
        Loading
    }
}
</script>
