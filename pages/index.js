import AppState from "../data";
import App from "../components/composed/App";
import Layout from "../components/composed/Layout";

export default () => (
  <Layout>
    <App pages={AppState.pages} />
  </Layout>
);
