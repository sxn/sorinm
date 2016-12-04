import React, { PropTypes } from 'react';

import Bullets from '../connected/Bullets';
import ContactPage from '../composed/ContactPage';
import WelcomePage from '../composed/WelcomePage';
import CompanyPage from '../composed/CompanyPage';

const App = ({ pages }) => (
  <div className="App">
    <Bullets count={pages.length + 2} />
    <WelcomePage />
    {
      [...pages].reverse().map((page, index) => (
        <CompanyPage key={page.slug} {...page} />
      ))
    }
    <ContactPage />
    </div>
);

App.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape(
      {
        backgroundColor: PropTypes.string,
        color: PropTypes.string,
        slug: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired
      }
    )
  ).isRequired
};

export default App;
