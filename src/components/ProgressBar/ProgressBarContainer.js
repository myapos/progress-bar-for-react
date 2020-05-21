import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import ProgressBar from "./ProgressBar";
import withTooltip from "../../HOCS/withTooltip";
// import "./css.css";

import styles from "./styles";

const useStyles = createUseStyles(styles);

const ProgressBarContainer = ({
  percentage,
  fillerExtraStyles,
  progressBarExtraStyles,
  tooltip,
}) => {
  const classes = useStyles();

  if (percentage === 100) {
    return null;
  }

  let ProgressBarToUse = ProgressBar;

  if (tooltip && tooltip.length > 0) {
    ProgressBarToUse = withTooltip(ProgressBar);
  }

  return (
    <ProgressBarToUse
      percentage={percentage}
      fillerExtraStyles={fillerExtraStyles}
      progressBarExtraStyles={progressBarExtraStyles}
      tooltipContent={tooltip}
      classes={classes}
    />
  );
};

ProgressBarContainer.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  classes: PropTypes.object,
  fillerExtraStyles: PropTypes.object,
  progressBarExtraStyles: PropTypes.object,
};

export default ProgressBarContainer;
