import React, { PropTypes } from "react";

import "./Page.css";

const Page = ({ children, style: childStyle }) => {
  const style = {
    boxSizing: "border-box",
    height: "100vh",
    position: "relative",
    width: "100%"
  };

  return (
    <div className="Page" style={Object.assign(style, childStyle)}>
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  childStyle: PropTypes.shape({
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
  })
};

export default Page;
