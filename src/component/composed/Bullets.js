import React, { Component, PropTypes } from 'react';
import smoothScroll from 'smoothscroll';

import Bullet from '../base/Bullet';

import './Bullets.css';

class Bullets extends Component {
  componentDidMount = () => {
    document.addEventListener('scroll', this.handleScroll);
    document.addEventListener('keydown', this.disableArrows);
    document.addEventListener('keyup', this.handleArrowNavigation);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { selectedPage, selectPage } = this.props;

    const currentPage = Math.round(window.scrollY / window.innerHeight);

    if (currentPage !== selectedPage) {
      selectPage(currentPage);
    }
  }

  disableArrows = (e) => {
    const upArrowPressed = e.keyCode === 38;
    const downArrowPressed = e.keyCode === 40;

    if(upArrowPressed || downArrowPressed) {
        e.preventDefault();
    }
  }

  handleArrowNavigation = (e) => {
    const { selectedPage } = this.props;

    const upArrowPressed = e.keyCode === 38;
    const jPressed = e.keyCode === 75;

    if (upArrowPressed || jPressed) {
      smoothScroll((selectedPage - 1) * window.innerHeight);
    }

    const downArrowPressed = e.keyCode === 40;
    const kPressed = e.keyCode === 74;

    if (downArrowPressed || kPressed) {
      smoothScroll((selectedPage + 1) * window.innerHeight);
    }
  }

  render = () => {
    const { count, selectedPage } = this.props;

    return (
      <div className="Bullets">
        {
          [...Array(count)].map((_, index) => (
            <Bullet
              key={'bullet-' + index}
              index={index}
              active={index === selectedPage }
              selectedPage={selectedPage}
              pageCount={count}
              onClick={(page) => smoothScroll(page * window.innerHeight)}
            />
          ))
        }
      </div>
    );
  }
};

Bullets.propTypes = {
  count: PropTypes.number.isRequired,
  selectedPage: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired
};

export default Bullets;
