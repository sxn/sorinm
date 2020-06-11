◊(local-require pollen/tag)

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content= "width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="./home/styles.css" />
    <link rel="shortcut icon" href="./favicon.png">

    <title>◊|home-title|</title>
  </head>

  <body>
    ◊(->html doc #:splice? #t)

    <script defer src="./home/app.js"></script>
  </body>
</html>
