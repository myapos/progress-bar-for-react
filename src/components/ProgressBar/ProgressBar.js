import React from "react";
import PropTypes from "prop-types";
import Filler from "./Filler";

const ProgressBar = ({ percentage, extraStyles, classes }) => (
  <div className={classes.progressBar}>
    <Filler
      percentage={percentage}
      extraStyles={extraStyles}
      classes={classes}
    />
  </div>
);

ProgressBar.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  classes: PropTypes.object,
};
export default ProgressBar;
