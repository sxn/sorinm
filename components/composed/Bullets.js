import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";
import smoothScroll from "smoothscroll";

import Bullet from "../base/Bullet";

const styles = {
  bullets: css`
    top: 50%;
    left: 3%;
    position: fixed;
    transform: translateY(-50%);
    z-index: 2;
    @media only screen and (max-width: 1024px) and (orientation: portrait) {
      display: none;
    }
  `,
};

class Bullets extends Component {
  state = { selectedPage: 0 };

  componentDidMount = () => {
    document.addEventListener("scroll", this.handleScroll);
    document.addEventListener("keydown", this.disableArrows);
    document.addEventListener("keyup", this.handleArrowNavigation);
  };

  handleScroll = () => {
    const { selectedPage } = this.state;
    const currentPage = Math.round(window.scrollY / window.innerHeight);

    if (currentPage !== selectedPage) {
      this.setState({ selectedPage: currentPage });
    }
  };

  disableArrows = e => {
    const upArrowPressed = e.code === "ArrowUp";
    const downArrowPressed = e.code === "ArrowDown";

    if (upArrowPressed || downArrowPressed) {
      e.preventDefault();
    }
  };

  handleArrowNavigation = e => {
    const { selectedPage } = this.state;

    const upArrowPressed = e.code === "ArrowUp";
    const kPressed = e.code === "KeyK";

    if (upArrowPressed || kPressed) {
      smoothScroll((selectedPage - 1) * window.innerHeight);
    }

    const downArrowPressed = e.code === "ArrowDown";
    const jPressed = e.code === "KeyJ";

    if (downArrowPressed || jPressed) {
      smoothScroll((selectedPage + 1) * window.innerHeight);
    }
  };

  render = () => {
    const { count } = this.props;
    const { selectedPage } = this.state;

    return (
      <div className={styles.bullets}>
        {[...Array(count)].map((_, index) => (
          <Bullet
            key={"bullet-" + index}
            index={index}
            active={index === selectedPage}
            selectedPage={selectedPage}
            pageCount={count}
            onClick={page => smoothScroll(page * window.innerHeight)}
          />
        ))}
      </div>
    );
  };
}

Bullets.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Bullets;
