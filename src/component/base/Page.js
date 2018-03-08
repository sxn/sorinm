import React from "react";
import PropTypes from "prop-types";

import "./Page.css";

const Page = ({ children, color, backgroundColor }) => {
  return (
    <div
      className="Page"
      style={{
        boxSizing: "border-box",
        height: "100vh",
        position: "relative",
        width: "100%",
        color,
        backgroundColor,
      }}>
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Page;
