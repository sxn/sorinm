import React from "react";
import { css } from "react-emotion";

const styles = {
  logo: css`
    height: 4em;
    @media only screen and (max-width: 1024px) {
      height: 2em;
    }
  `,
};

const MailLogo = () => (
  <svg className={styles.logo} viewBox="2 4 20 16">
    <path d="M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z" />
  </svg>
);

export default MailLogo;
