import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";

import Page from "../base/Page";
import UtcnLogo from "../base/UtcnLogo";
import ArobsLogo from "../base/ArobsLogo";
import AgilioLogo from "../base/AgilioLogo";
import HoneyTracksLogo from "../base/HoneyTracksLogo";
import InterNationsLogo from "../base/InterNationsLogo";
import Timeline from "../composed/Timeline";

const styles = {
  leftContainer: css`
    flex: 3;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  `,
  company: css`
    width: 60%;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
  `,
  logoLink: css`
    fill: #ffffff;
  `,
  companyName: css`
    font-size: 2.1em;
    font-family: Oswald, sans-serif;
    font-weight: 400;
    @media only screen and (max-width: 1024px) {
      font-size: 1.1em;
    }
  `,
  companyTitle: css`
    font-size: 1.7em;
    font-family: Oswald, sans-serif;
    font-weight: 300;
    @media only screen and (max-width: 1024px) {
      font-size: 0.7em;
    }
  `,
  rightContainer: css`
    flex: 5;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  `,
  descriptionContainer: css`
    width: 75%;
    font-family: Open Sans Condensed, sans-serif;
    font-weight: 300;
    font-size: 1.2em;
    @media only screen and (max-width: 1024px) {
      font-size: 0.8em;
    }
  `,
  description: css`
    margin-top: 1em;
  `,
};

const logoMap = {
  utcn: <UtcnLogo />,
  arobs: <ArobsLogo />,
  agilio: <AgilioLogo />,
  honeytracks: <HoneyTracksLogo />,
  internations: <InterNationsLogo />,
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
  url,
}) => (
  <Page backgroundColor={backgroundColor} color={color}>
    <div className={styles.leftContainer}>
      <div className={styles.company}>
        <div className={styles.logo}>
          <a className={styles.logoLink} href={url} target="_blank" rel="noopener">
            {logoMap[slug]}
          </a>
        </div>
        <p className={styles.companyName}>{name}</p>
        <p className={styles.companyTitle}>{title}</p>
      </div>
    </div>

    <Timeline start={start} end={end} color={backgroundColor} />

    <div className={styles.rightContainer}>
      <div className={styles.descriptionContainer}>
        {description.map((row, index) => (
          <p className={styles.description} key={slug + "-description-" + index}>
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
  url: PropTypes.string.isRequired,
};

export default CompanyPage;
