import React from 'react';
import PropTypes from 'prop-types';
import Filler from './Filler';

const ProgressBar = ({ percentage, backgroundColor, classes }) => (
  <div className={classes.progressBar}>
    <Filler
      percentage={percentage}
      backgroundColor={backgroundColor}
      classes={classes} />
  </div>
);

ProgressBar.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  classes: PropTypes.object,
};
export default ProgressBar;
