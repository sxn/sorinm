import React from "react";
import PropTypes from "prop-types";

import Page from "../base/Page";
import UtcnLogo from "../base/UtcnLogo";
import ArobsLogo from "../base/ArobsLogo";
import AgilioLogo from "../base/AgilioLogo";
import HoneyTracksLogo from "../base/HoneyTracksLogo";
import InterNationsLogo from "../base/InterNationsLogo";
import Timeline from "../composed/Timeline";

import "./CompanyPage.css";

const logoMap = {
  utcn: <UtcnLogo />,
  arobs: <ArobsLogo />,
  agilio: <AgilioLogo />,
  honeytracks: <HoneyTracksLogo />,
  internations: <InterNationsLogo />
};

const CompanyPage = ({
  backgroundColor,
  color,
  description,
  end,
  name,
  slug,
  start,
  title,
  url
}) => (
  <Page backgroundColor={backgroundColor} color={color}>
    <div className="CompanyPage-LeftContainer">
      <div className="CompanyPage-Company">
        <div className="CompanyPage-Logo">
          <a
            className="CompanyPage-LogoLink"
            href={url}
            target="_blank"
            rel="noopener"
          >
            {logoMap[slug]}
          </a>
        </div>
        <p className="CompanyPage-CompanyName">{name}</p>
        <p className="CompanyPage-CompanyTitle">{title}</p>
      </div>
    </div>

    <Timeline start={start} end={end} color={backgroundColor} />

    <div className="CompanyPage-RightContainer">
      <div className="CompanyPage-DescriptionContainer">
        {description.map((row, index) => (
          <p
            className="CompanyPage-Description"
            key={slug + "-description-" + index}
          >
            {row}
          </p>
        ))}
      </div>
    </div>
  </Page>
);

CompanyPage.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  end: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default CompanyPage;
