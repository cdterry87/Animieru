<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <div class="line">
                <span class="title is-5">Background</span>
            </div>
            <p>
                {{ background }}
            </p>
        </div>
    </div>
</template>

<script>
import Loading from '../Utility/Loading';

export default {
    name: 'Background',
    props: ['background', 'isLoading'],
    components: {
        Loading
    }
}
</script>

