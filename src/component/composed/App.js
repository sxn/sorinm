import React from "react";
import PropTypes from "prop-types";

import Bullets from "component/connected/Bullets";
import ContactPage from "component/composed/ContactPage";
import WelcomePage from "component/composed/WelcomePage";
import CompanyPage from "component/composed/CompanyPage";

const App = ({ pages }) => (
  <div className="App">
    <Bullets count={pages.length + 2} />

    <WelcomePage />

    {[...pages]
      .reverse()
      .map((page, index) => <CompanyPage key={page.slug} {...page} />)}

    <ContactPage />
  </div>
);

App.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      backgroundColor: PropTypes.string,
      color: PropTypes.string,
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};

export default App;
