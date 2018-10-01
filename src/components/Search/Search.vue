<template>
    <div>
        <Form />
        <br>
        <Results />
    </div>
</template>

<script>
import Form from './Form';
import Results from './Results';

export default {
    name: 'Search',
    components: {
        Form,
        Results
    }
}
</script>
