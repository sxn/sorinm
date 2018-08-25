import React, { Fragment } from "react";
import { css } from "emotion";

import Page from "../base/Page";
import GitHubLogo from "../base/GitHubLogo";
import LinkedInLogo from "../base/LinkedInLogo";
import MailLogo from "../base/MailLogo";
import XingLogo from "../base/XingLogo";
import StackOverflowLogo from "../base/StackOverflowLogo";

const styles = {
  container: css`
    height: 100%;
    width: 100%;
    display: flex;

    @media only screen and (max-width: 1024px) {
      flex-direction: column-reverse;
    }
  `,
  leftContainer: css`
    flex: 3;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  `,
  picture: css`
    background-size: cover;
    background-image: url("/static/sorin.jpg");
    height: 23em;
    width: 23em;
    border-radius: 50%;
    @media only screen and (max-width: 1024px) {
      height: 10em;
      width: 10em;
    }
  `,
  rightContainer: css`
    flex: 5;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
  `,
  methods: css`
    display: flex;
    align-items: flex-end;
    justify-content: center;
  `,
  text: css`
    font-size: 2em;
    margin: 0 0 0.5em 0;
    color: #000000;
  `,
  link: css`
    display: block;
    margin: 0 1em 0 1em;
    &:hover {
      fill: #d42d38;
    }
  `,
};

const ContactPage = () => (
  <Page backgroundColor={"#ffffff"}>
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.picture} />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.description}>
          <p className={styles.text}>Let's talk!</p>
          <div className={styles.methods}>
            <div>
              <a className={styles.link} href="mailto:hello@sorinmuntean.ro?Subject=Hello">
                <MailLogo />
              </a>
            </div>
            <div>
              <a
                className={styles.link}
                href="https://github.com/sxn"
                target="_blank"
                rel="noopener noreferrer">
                <GitHubLogo />
              </a>
            </div>
            <div>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/sorinmuntean"
                target="_blank"
                rel="noopener noreferrer">
                <LinkedInLogo />
              </a>
            </div>
            {false && (
              <Fragment>
                <a
                  className={styles.link}
                  href="https://www.xing.com/profile/Sorin_Muntean2"
                  target="_blank"
                  rel="noopener noreferrer">
                  <XingLogo />
                </a>
                <a
                  className={styles.link}
                  href="https://stackoverflow.com/users/5495253/sxn"
                  target="_blank"
                  rel="noopener noreferrer">
                  <StackOverflowLogo />
                </a>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  </Page>
);

export default ContactPage;
