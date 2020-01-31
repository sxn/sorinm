import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Bullet.css";

const Bullet = ({ index, active, color, onClick }) => {
  const classes = classNames("Bullet", {
    active: active,
  });

  return <div className={classes} style={{ background: color }} onClick={() => onClick(index)} />;
};

Bullet.propTypes = {
  index: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Bullet.defaultProps = {
  color: "#ffffff",
};

export default Bullet;
