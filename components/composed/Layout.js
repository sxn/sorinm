import { Fragment } from "react";
import Head from "next/head";

export default ({ children }) => (
  <Fragment>
    <Head>
      <meta charset="utf-8" />
      <meta name="google-site-verification" content="cT0uaXKgUq5MfIGigiV0RSBvcjHCP-cgaOlZXwOWqdY" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/static/manifest.json" />
      <link rel="shortcut icon" href="/static/favicon.png" />
      <title>Sorin Muntean</title>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-94031225-1', 'auto');
    ga('send', 'pageview');`,
        }}
      />
    </Head>
    {children}
  </Fragment>
);
