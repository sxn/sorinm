import React, { Component } from "react";
import PropTypes from "prop-types";

import Bullet from "../base/Bullet";
import "./Bullets.css";

class Bullets extends Component {
  componentDidMount = () => {
    document.addEventListener("scroll", this.handleScroll);
    document.addEventListener("keydown", this.disableArrows);
    document.addEventListener("keyup", this.handleArrowNavigation);
  };

  handleScroll = () => {
    const { currentPageIndex, selectPage } = this.props;

    const currentPage = Math.round(window.scrollY / window.innerHeight);

    if (currentPage !== currentPageIndex) {
      selectPage(currentPage);
    }
  };

  disableArrows = (e) => {
    const upArrowPressed = e.code === "ArrowUp";
    const downArrowPressed = e.code === "ArrowDown";

    if (upArrowPressed || downArrowPressed) {
      e.preventDefault();
    }
  };

  handleArrowNavigation = (e) => {
    const { currentPageIndex } = this.props;

    const upArrowPressed = e.code === "ArrowUp";
    const kPressed = e.code === "KeyK";

    if (upArrowPressed || kPressed) {
      scroll({ top: (currentPageIndex - 1) * window.innerHeight, behavior: "smooth" });
    }

    const downArrowPressed = e.code === "ArrowDown";
    const jPressed = e.code === "KeyJ";

    if (downArrowPressed || jPressed) {
      scroll({ top: (currentPageIndex + 1) * window.innerHeight, behavior: "smooth" });
    }
  };

  render = () => {
    const { count, currentPageIndex, currentPage } = this.props;

    return (
      <div className="Bullets">
        {[...Array(count)].map((_, index) => (
          <Bullet
            key={"bullet-" + index}
            index={index}
            active={index === currentPageIndex}
            color={currentPage ? currentPage.color : undefined}
            onClick={(page) => scroll({ top: page * window.innerHeight, behavior: "smooth" })}
          />
        ))}
      </div>
    );
  };
}

Bullets.propTypes = {
  count: PropTypes.number.isRequired,
  currentPage: PropTypes.object,
  currentPageIndex: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired,
};

export default Bullets;
