◊(local-require pollen/tag)

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content= "width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="./home/static/css/styles.css" />
    <link rel="shortcut icon" href="./home/static/images/favicon.png">

    <title>◊|home-title|</title>
  </head>

  <body>
    ◊(->html doc #:splice? #t)

    <script defer src="./home/static/js/app.js"></script>

    <script>
      (function(n, e, m, E, a, $) {
        n[E]=n[E]||function(){(n[E].q=n[E].q||[]).push(arguments)};$=e.createElement(m);
        $.id=E;$.src=a;$.async=1;m=e.getElementsByTagName(m)[0];m.parentNode.insertBefore($,m)
      })(window, document, "script", "nemea", "https://sorin.nemea.co/track.js");
    
      nemea("view");
    </script>
  </body>
</html>
