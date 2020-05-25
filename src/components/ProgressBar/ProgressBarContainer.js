import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

import ProgressBar from './ProgressBar';
import withTooltip from '../../HOCS/withTooltip';

import styles from './styles';

const useStyles = createUseStyles(styles);

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const ProgressBarContainer = ({
  percentage,
  fillerExtraStyles,
  progressBarExtraStyles,
  tooltip,
  onPercentageChange,
}) => {
  // inspired source
  // https://stackoverflow.com/questions/53446020/how-to-compare-oldvalues-and-newvalues-on-react-hooks-useeffect
  const previousValue = usePrevious({ percentage });

  useEffect(() => {
    const hasChanged = previousValue && previousValue.percentage !== percentage;
    const hasSetOnPercentageChange =
      onPercentageChange && typeof onPercentageChange === 'function';

    if (hasChanged && hasSetOnPercentageChange) {
      // process here
      onPercentageChange(percentage);
    }
  }, [percentage]);

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
