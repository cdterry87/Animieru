<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <div class="line">
                <span class="title is-5">Synopsis</span>
            </div>
            <p>
                {{ synopsis }}
            </p>
        </div>
    </div>
</template>

<script>
import Loading from '../Utility/Loading';

export default {
    name: 'Synopsis',
    props: ['synopsis', 'isLoading'],
    components: {
        Loading
    }
}
</script>

