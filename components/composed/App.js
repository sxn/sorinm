import React, { Fragment } from "react";
import PropTypes from "prop-types";

import AppState from "../../utils/data";
import Bullets from "../composed/Bullets";
import ContactPage from "../composed/ContactPage";
import WelcomePage from "../composed/WelcomePage";
import CompanyPage from "../composed/CompanyPage";

const App = ({ pages }) => (
  <Fragment>
    <Bullets count={pages.length + 2} />
    <WelcomePage />
    {pages.map(page => <CompanyPage key={page.slug} {...page} />)}
    <ContactPage />
  </Fragment>
);

App.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      backgroundColor: PropTypes.string,
      color: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      end: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default App;
