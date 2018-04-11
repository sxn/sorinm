import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const styles = {
  page: css`
    align-items: center;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    height: 100vh;
    position: relative;
    width: 100vw;
  `,
};

const Page = ({ children, color, backgroundColor }) => {
  return (
    <div
      className={css`
        ${styles.page};
        background-color: ${backgroundColor};
        color: ${color};
      `}>
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Page;
