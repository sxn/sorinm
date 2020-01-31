import React from "react";
import PropTypes from "prop-types";

import "./KiLabsLogo.css";

const KiLabsLogo = ({ fillColor }) => {
  return (
    <svg className="KiLabsLogo" viewBox="0 0 150 150">
      <g stroke="none" strokeWidth="1" fill="none">
        <g stroke={fillColor} transform="translate(-297.000000, -3782.000000)" strokeWidth="7">
          <g transform="translate(-296.000000, -545.000000)">
            <g transform="translate(202.000000, 3898.000000)">
              <g transform="translate(104.000000, 0.000000)">
                <path d="M296.768629,438.768629 L328.143162,567.12714 L425.12714,470.143162 L296.768629,438.768629 Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

KiLabsLogo.propTypes = {
  fillColor: PropTypes.string.isRequired,
};

KiLabsLogo.defaultProps = {
  fillColor: "#ffffff",
};

export default KiLabsLogo;
