
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <meta name="keywords" content="anime, manga, voice actors, anime characters, search anime, search manga, search voice actors, search anime characters">
    <meta property="og:site_name" content="Animieru">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Animieru - Search for all things Anime!">
    <meta property="og:description" content="Search for your favorite anime, manga, anime characters, and voice actors!">
    <meta property="og:locale" content="en_US" />
    <title>{{ config('app.name', 'Animieru') }}</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <app></app>
    </div>
    <script src="{{ mix('js/bootstrap.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
