import { Fragment } from "react";
import Head from "next/head";
import { hydrate, injectGlobal } from "emotion";

const fonts = `
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Open+Sans+Condensed:300|Oswald:300,400');
`;

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: Open Sans, sans-serif;
    background: #e1e1e1;
    color: #575757;
  }

  p {
    margin: 0;
  }

  ::selection {
    background-color: #d42d38;
    color: #fea104;
  }
`;

export default class Layout extends React.Component {
  render() {
    return (
      <Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="google-site-verification"
            content="cT0uaXKgUq5MfIGigiV0RSBvcjHCP-cgaOlZXwOWqdY"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="shortcut icon" href="/static/favicon.png" />
          <title>Sorin Muntean</title>
          <style dangerouslySetInnerHTML={{ __html: fonts }} />
        </Head>
        {this.props.children}
      </Fragment>
    );
  }
}
