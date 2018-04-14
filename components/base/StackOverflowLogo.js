import React from "react";
import { css } from "emotion";

const styles = {
  logo: css`
    height: 6em;
    width: auto;
    margin: 1em 1em 0 1em;
  `,
  stack: css`
    fill: #bcbbbb;
  `,
  base: css`
    fill: #f48023;
  `,
};

const StackOverflowLogo = () => (
  <svg className={styles.logo} viewBox="0 0 120 120">
    <polygon
      className={styles.stack}
      points="84.4,93.8 84.4,70.6 92.1,70.6 92.1,101.5 22.6,101.5 22.6,70.6 30.3,70.6 30.3,93.8"
    />
    <path
      className={styles.base}
      d="M38.8,68.4l37.8,7.9l1.6-7.6l-37.8-7.9L38.8,68.4zM43.8,50.4l35,16.3l3.2-7l-35-16.4L43.8,50.4zM53.5,33.2l29.7,24.7l4.9-5.9L58.4,27.3L53.5,33.2zM72.7,14.9l-6.2,4.6l23,31l6.2-4.6L72.7,14.9zM38,86h38.6v-7.7H38V86z"
    />
  </svg>
);

export default StackOverflowLogo;
