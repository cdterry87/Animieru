<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>John Smith</strong> 
                    <small>@johnsmith</small>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin ornare magna eros, eu pellentesque tortor vestibulum ut. 
                    Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </p>
            </div>
        </div>
        <div class="media-right">
            <a class="level-item"><span class="icon is-small"><i class="fas fa-heart"></i></span></a>
        </div>
    </article>
</template>

<script>
export default {
    name: 'SearchResultsItem',
}
</script>
