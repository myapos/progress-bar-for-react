import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import ProgressBar from "./ProgressBar";
import withTooltip from "../../HOCS/withTooltip";

import styles from "./styles";

// const Footer = React.lazy(() => import('../components/Footer/Footer.js'));
const ProgressBarContainer = ({
  percentage,
  fillerExtraStyles,
  classes,
  tooltip,
}) => {
  if (percentage === 100) {
    return null;
  }

  let ProgressBarToUse = ProgressBar;

  if (tooltip && tooltip.length > 0) {
    ProgressBarToUse = withTooltip(ProgressBar);
  }

  return (
    <div className={classes.progressBarContainer}>
      <ProgressBarToUse
        percentage={percentage}
        fillerExtraStyles={fillerExtraStyles}
        classes={classes}
        tooltipContent={tooltip}
      />
    </div>
  );
};

ProgressBarContainer.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  classes: PropTypes.object,
  fillerExtraStyles: PropTypes.object,
};

export default withStyles(styles)(ProgressBarContainer);
