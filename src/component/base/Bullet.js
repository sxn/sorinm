import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './Bullet.css';

const Bullet = ({ index, active, isLastPage, selectedPage, pageCount, onClick }) => {
  const classes = classNames('Bullet', { 'active': active, 'black': selectedPage === pageCount - 1});

  return (
    <div className={classes} onClick={() => onClick(index)}></div>
  );
};

Bullet.propTypes = {
  index: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  selectedPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Bullet;
