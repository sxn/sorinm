import React from "react";
import { css } from "emotion";
import smoothScroll from "smoothscroll";

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
  chevron: css`
    position: absolute;
    bottom: 5%;
    cursor: pointer;
    border-style: solid;
    border-width: 0.1em 0.1em 0 0;
    display: inline-block;
    height: 1em;
    width: 1em;
    transform: rotate(135deg);
  `,
};

const WelcomePage = () => (
  <Page color={"#d42d38"} backgroundColor={"#ffffff"}>
    <div className={styles.welcome}>
      <p className={styles.largeText}>Hi!</p>
      <p className={styles.text}>My name's Sorin.</p>
      <p className={styles.text}>I'm a software developer from Munich.</p>
      <span className={styles.chevron} onClick={() => smoothScroll(1 * window.innerHeight)} />
    </div>
  </Page>
);

export default WelcomePage;
