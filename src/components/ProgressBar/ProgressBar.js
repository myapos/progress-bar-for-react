import React from "react";
import PropTypes from "prop-types";
import Filler from "./Filler";

const ProgressBar = ({ percentage, fillerExtraStyles, classes }) => (
  <div className={classes.progressBar}>
    <Filler
      percentage={percentage}
      fillerExtraStyles={fillerExtraStyles}
      classes={classes}
    />
  </div>
);

ProgressBar.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  classes: PropTypes.object,
  fillerExtraStyles: PropTypes.object,
};
export default ProgressBar;
