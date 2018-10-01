<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <div class="title">
                {{ details.name }} {{ details.name_kanji }}
            </div>
            <div class="subtitle">
                {{ details.nicknames }}
            </div>
            <p>
                {{ details.about }}
            </p>
        </div>
    </div>
</template>

<script>
import Loading from '../Utility/Loading';

export default {
    name: 'Details',
    props: ['details', 'isLoading'],
    components: {
        Loading
    }
}
</script>
