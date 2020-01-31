import React from "react";
import PropTypes from "prop-types";

import "./Timeline.css";

const Timeline = ({ start, end, textColor, backgroundColor }) => (
  <div
    className="Timeline"
    style={{
      backgroundImage: `linear-gradient( 90deg, transparent calc(50% - 0.81px), ${backgroundColor} calc(50% - 0.8px), ${backgroundColor} calc(50% + 0.8px), transparent calc(50% + 0.81px), transparent 100%)`,
    }}>
    <div
      className="Timeline-DateContainer Timeline-Top"
      style={{ color: textColor, backgroundColor }}>
      <p className="Timeline-Date">{end}</p>
    </div>
    <div
      className="Timeline-DateContainer Timeline-Bottom"
      style={{ color: textColor, backgroundColor }}>
      <p className="Timeline-Date">{start}</p>
    </div>
  </div>
);

Timeline.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

export default Timeline;
