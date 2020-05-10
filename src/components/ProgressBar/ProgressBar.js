import React from "react";
import PropTypes from "prop-types";
import Filler from "./Filler";

const ProgressBar = ({
  percentage,
  fillerExtraStyles,
  progressBarExtraStyles,
  classes,
}) => {
  const opt = progressBarExtraStyles;

  console.log("opt", opt);
  return (
    <div
      className={classes.progressBar}
      style={{
        ...opt,
      }}
    >
      <Filler
        percentage={percentage}
        fillerExtraStyles={fillerExtraStyles}
        classes={classes}
      />
    </div>
  );
};
ProgressBar.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  classes: PropTypes.object,
  fillerExtraStyles: PropTypes.object,
  progressBarExtraStyles: PropTypes.object,
};
export default ProgressBar;
