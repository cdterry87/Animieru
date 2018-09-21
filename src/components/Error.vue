<template>
    <div id="error" class="columns" v-if="errors.length > 0">
        <div class="column is-8 is-offset-2">
            <article class="message is-danger">
                <div class="message-body">
                    <li v-for="error in errors">
                        {{error.message }}
                    </li>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Error',
  props: ['errors']
}
</script>
