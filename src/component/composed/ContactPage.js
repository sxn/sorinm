import React from "react";

import Page from "../base/Page";
import GitHubLogo from "../base/GitHubLogo";
import LinkedInLogo from "../base/LinkedInLogo";
import MailLogo from "../base/MailLogo";
import "./ContactPage.css";

const ContactPage = () => (
  <Page backgroundColor={"#ffffff"}>
    <div className="ContactPage-Container">
      <div className="ContactPage-LeftContainer">
        <div className="ContactPage-Picture" />
      </div>
      <div className="ContactPage-RightContainer">
        <div className="ContactPage-Description">
          <p className="ContactPage-Text">Let's work together!</p>
          <div className="ContactPage-Methods">
            <MailLogo />
            <GitHubLogo />
            <LinkedInLogo />
          </div>
        </div>
      </div>
    </div>
  </Page>
);

export default ContactPage;
