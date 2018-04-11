import React from "react";
import { css } from "react-emotion";

import Page from "../base/Page";

const styles = {
  welcome: css`
    font-weight: bold;
    text-align: center;
  `,
  text: css`
    font-size: 2em;
    margin: 0 0 0.5em 0;
  `,
  largeText: css`
    font-size: 7em;
    margin: 0;
  `,
};

const WelcomePage = () => (
  <Page backgroundColor={"#d42d38"} color={"#ffffff"}>
    <div className={styles.welcome}>
      <p className={styles.largeText}>Hi!</p>
      <p className={styles.text}>My name's Sorin.</p>
      <p className={styles.text}>I live in Munich.</p>
      <p className={styles.text}>I like exercising and scuba diving.</p>
      <p className={styles.text}>And I'm a software developer.</p>
    </div>
  </Page>
);

export default WelcomePage;
