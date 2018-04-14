import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const styles = {
  timeline: css`
    height: 100%;
    flex: 0.2;
    justify-content: space-between;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      90deg,
      transparent calc(50% - 0.81px),
      #ffffff calc(50% - 0.8px),
      #ffffff calc(50% + 0.8px),
      transparent calc(50% + 0.81px),
      transparent 100%
    );
  `,

  dateContainer: css`
    background-color: #ffffff;
    text-transform: uppercase;
    border-radius: 50%;
    height: 6em;
    width: 6em;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1024px) {
      height: 4em;
      width: 4em;
    }
  `,

  date: css`
    padding: 5px;
    font-size: 1em;
    text-align: center;
    @media only screen and (max-width: 1024px) {
      font-size: 0.8em;
    }
  `,

  top: css`
    margin-top: 2em;
  `,

  bottom: css`
    margin-bottom: 2em;
  `,
};

const Timeline = ({ start, end, color }) => (
  <div className={styles.timeline}>
    <div
      className={css`
        ${styles.dateContainer};
        ${styles.top};
      `}
      style={{ color }}>
      <p className={styles.date}>{end}</p>
    </div>
    <div
      className={css`
        ${styles.dateContainer};
        ${styles.bottom};
        color: ${color};
      `}>
      <p className={styles.date}>{start}</p>
    </div>
  </div>
);

Timeline.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Timeline;
