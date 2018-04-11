import { injectGlobal } from "emotion";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Open+Sans+Condensed:300|Oswald:300,400');

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
