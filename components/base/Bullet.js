import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const styles = {
  bullet: css`
    display: block;
    height: 0.7em;
    width: 0.7em;
    background: #ffffff;
    cursor: pointer;
    opacity: 0.4;
    transition: opacity 0.35s;
    border-radius: 0.7em;
    margin-top: 0.7em;
    @media only screen and (max-width: 1024px) and (orientation: portrait) {
      height: 0.5em;
      width: 0.5em;
    }
  `,
  active: css`
    opacity: 1;
  `,
  black: css`
    transition: opacity 1s;
    background: #000000;
  `,
};

const Bullet = ({ index, active, isLastPage, selectedPage, pageCount, onClick }) => {
  return (
    <div
      className={css`
        ${styles.bullet};
        ${active ? styles.active : ""};
        ${selectedPage === pageCount - 1 || selectedPage === 0 ? styles.black : ""};
      `}
      onClick={() => onClick(index)}
    />
  );
};

Bullet.propTypes = {
  index: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  selectedPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Bullet;
