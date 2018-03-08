import React, { Component } from "react";
import PropTypes from "prop-types";
import smoothScroll from "smoothscroll";

import Bullet from "component/base/Bullet";
import "./Bullets.css";

class Bullets extends Component {
  componentDidMount = () => {
    document.addEventListener("scroll", this.handleScroll);
    document.addEventListener("keydown", this.disableArrows);
    document.addEventListener("keyup", this.handleArrowNavigation);
  };

  handleScroll = () => {
    const { selectedPage, selectPage } = this.props;

    const currentPage = Math.round(window.scrollY / window.innerHeight);

    if (currentPage !== selectedPage) {
      selectPage(currentPage);
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
    const { selectedPage } = this.props;

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
    const { count, selectedPage } = this.props;

    return (
      <div className="Bullets">
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
  selectedPage: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired,
};

export default Bullets;
