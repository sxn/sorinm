import React from "react";

import Page from "../base/Page";

import "./WelcomePage.css";

const WelcomePage = () => (
  <Page style={{ backgroundColor: "#d42d38", color: "#ffffff" }}>
    <div className="WelcomePage">
      <p className="WelcomePage-LargeText">Hi!</p>
      <p className="WelcomePage-Text">My name's Sorin.</p>
      <p className="WelcomePage-Text">I live in Munich.</p>
      <p className="WelcomePage-Text">I like exercising and scuba diving.</p>
      <p className="WelcomePage-Text">And I'm a software developer.</p>
    </div>
  </Page>
);

export default WelcomePage;
