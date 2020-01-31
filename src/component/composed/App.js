import React from "react";
import PropTypes from "prop-types";

import Bullets from "component/connected/Bullets";
import ContactPage from "component/composed/ContactPage";
import WelcomePage from "component/composed/WelcomePage";
import CompanyPage from "component/composed/CompanyPage";

const App = ({ pages }) => (
  <div className="App">
    <Bullets count={pages.length + 2} />

    {pages.map(page => {
      if (page.type === "welcome") {
        return <WelcomePage key={page.slug} />;
      }
      if (page.type === "contact") {
        return <ContactPage key={page.slug} />;
      }

      return <CompanyPage key={page.slug} {...page} />;
    })}
  </div>
);

App.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string,
      description: PropTypes.arrayOf(PropTypes.string),
      end: PropTypes.string,
      name: PropTypes.string,
      start: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
};

export default App;
