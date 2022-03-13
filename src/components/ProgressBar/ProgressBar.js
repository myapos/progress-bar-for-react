import React from 'react';
import PropTypes from 'prop-types';
import { Filler } from '../Filler';

export const ProgressBar = ({
  percentage,
  fillerExtraStyles,
  progressBarExtraStyles,
  classes,
}) => {
  const opt = progressBarExtraStyles;
  return (
    <div className={classes.progressBarContainer}>
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
// export default ProgressBar;
