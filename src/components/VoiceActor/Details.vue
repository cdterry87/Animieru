<template>
    <div class="box">
        <Loading :class="{'is-hidden': !isLoading}" />

        <div :class="{'is-hidden': isLoading}">
            <div class="title is-5">
                {{ details.name }}
            </div>
            <div>
                <img :src="details.image_url" class="image" />
            </div>
            <table class="table is-fullwidth">
                <tr v-if="details.birthday != null">
                    <td>Birthday:</td>
                    <td>{{ details.birthday.replace('T00:00:00+00:00', '') }}</td>
                </tr>
                <tr v-if="details.website_url != null">
                    <td colspan="2"><a :href="details.website_url" target="_blank">{{ details.website_url }}</a></td>
                </tr>
                <tr v-if="details.more != null">
                    <td colspan="2" v-html="details.more">
                    </td>
                </tr>
            </table>
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
