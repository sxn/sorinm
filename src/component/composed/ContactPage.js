import React from "react";

import Page from "component/base/Page";
import GitHubLogo from "component/base/GitHubLogo";
import LinkedInLogo from "component/base/LinkedInLogo";
import MailLogo from "component/base/MailLogo";
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
