import React from "react";

import Page from "component/base/Page";
import "./WelcomePage.css";

const WelcomePage = () => (
  <Page backgroundColor={"#d42d38"} color={"#ffffff"}>
    <div className="WelcomePage">
      <p className="WelcomePage-LargeText">Hi!</p>
      <p className="WelcomePage-Text">My name's Sorin.</p>
      <p className="WelcomePage-Text">I live in Munich.</p>
      <p className="WelcomePage-Text">I like programming.</p>
    </div>
  </Page>
);

export default WelcomePage;
