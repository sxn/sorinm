◊(local-require pollen/tag)

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content= "width=device-width, initial-scale=1">
    <meta name="description" content="Sorin Muntean's site 🚲 🏊 💻 ❤️">
    <meta property="og:url" content="https://sorinmuntean.ro/">
    <meta property="og:site_name" content="Sorin Muntean">
    <meta property="og:title" content="Sorin Muntean's site 🚲 🏊 💻 ❤️">
    <meta property="og:description" content="Sorin Muntean's site 🚲 🏊 💻 ❤️">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://sorinmuntean.ro/static/images/contact.jpg">
    <meta property="og:locale" content="en_US">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@naetnums">
    <meta name="twitter:description" content="Sorin Muntean's site 🚲 🏊 💻 ❤️">

    <link rel="stylesheet" type="text/css" href="./static/css/styles.css" />
    <link rel="shortcut icon" href="./static/images/favicon.png">

    <base href="◊|base-href|">

    <title>◊|page-title|</title>
  </head>

  <body>
    ◊(->html (make) #:splice? #t)

    <script defer src="./static/js/app.js"></script>

    ◊when/splice[(getenv "INCLUDE_TRACKING")]{
    <script>
      (function(n, e, m, E, a, $) {
        n[E]=n[E]||function(){(n[E].q=n[E].q||[]).push(arguments)};$=e.createElement(m);
        $.id=E;$.src=a;$.async=1;m=e.getElementsByTagName(m)[0];m.parentNode.insertBefore($,m)
      })(window, document, "script", "nemea", "https://sorin.nemea.co/track.js");
    
      nemea("view");
    </script>
    <script data-goatcounter="https://sorin.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>}
  </body>
</html>
