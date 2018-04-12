import { hydrate, injectGlobal } from "emotion";

if (typeof window !== "undefined") {
  hydrate(window.__NEXT_DATA__.ids);
}

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background: #e1e1e1;
    color: #575757;
  }

  p {
    margin: 0;
  }
`;

import AppState from "../utils/data";
import App from "../components/composed/App";
import Layout from "../components/composed/Layout";

export default () => (
  <Layout>
    <App pages={AppState.pages} />
  </Layout>
);
