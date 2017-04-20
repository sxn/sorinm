import React from "react";
import PropTypes from "prop-types";

import "./Timeline.css";

const Timeline = ({ start, end, color }) => (
  <div className="Timeline">
    <div
      className="Timeline-DateContainer Timeline-Top"
      style={{ color: color }}
    >
      <p className="Timeline-Date">{end}</p>
    </div>
    <div
      className="Timeline-DateContainer Timeline-Bottom"
      style={{ color: color }}
    >
      <p className="Timeline-Date">{start}</p>
    </div>
  </div>
);

Timeline.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Timeline;
