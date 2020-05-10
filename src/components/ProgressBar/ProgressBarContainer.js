import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';

const ProgressBarContainer = ({ percentage, backgroundColor, classes }) => {
  if (percentage === 100) {
    return null;
  }

  return (
    <div className={classes.progressBarContainer}>
      <ProgressBar
        percentage={percentage}
        backgroundColor={backgroundColor}
        classes={classes} />
    </div>
  );
};

ProgressBarContainer.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  classes: PropTypes.object,
};

export default ProgressBarContainer;
