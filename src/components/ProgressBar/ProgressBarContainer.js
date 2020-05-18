import React, { Component } from "react";
import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import ProgressBarChild from "./ProgressBarChild";

import ProgressBar from "./ProgressBar";
import withTooltip from "../../HOCS/withTooltip";
import "./css.css";

// import styles from "./styles";

// const Footer = React.lazy(() => import('../components/Footer/Footer.js'));
const ProgressBarContainer = ({
  percentage,
  fillerExtraStyles,
  progressBarExtraStyles,
  classes = {},
  tooltip,
}) => {
  console.log("test", percentage);

  // const StyledProgressBarChild = withStyles(styles)(ProgressBarChild);
  // const StyledProgressBar = withStyles(styles)(ProgressBar);

  // return <StyledProgressBarChild />;
  if (percentage === 100) {
    return null;
  }

  let ProgressBarToUse = ProgressBar;

  if (tooltip && tooltip.length > 0) {
    ProgressBarToUse = withTooltip(ProgressBar);
  }

  return (
    <div className="progressBarContainer">
      <ProgressBarToUse
        percentage={percentage}
        fillerExtraStyles={fillerExtraStyles}
        progressBarExtraStyles={progressBarExtraStyles}
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
  progressBarExtraStyles: PropTypes.object,
};

export default ProgressBarContainer;
