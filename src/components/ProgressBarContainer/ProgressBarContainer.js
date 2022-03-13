import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

import withTooltip from '../HOCS/withTooltip';
import usePrevious from '../HOCS/usePrevious';

import { ProgressBar } from '../ProgressBar';

import styles from './styles';

const useStyles = createUseStyles(styles);

const TooltipedProgressBar = withTooltip(ProgressBar);

export const ProgressBarContainer = ({
  percentage,
  fillerExtraStyles,
  progressBarExtraStyles,
  tooltip,
  onPercentageChange,
}) => {
  const ref = useRef();
  // inspired source
  // https://stackoverflow.com/questions/53446020/how-to-compare-oldvalues-and-newvalues-on-react-hooks-useeffect
  const previousValue = usePrevious({ percentage, ref });
  const [savedOnpercentage, setSaveOnPercentage] = useState(false);
  let ProgressBarToUse = ProgressBar;
  const hasTooltip = tooltip && tooltip.length > 0;

  useEffect(() => {
    const hasChanged = previousValue && previousValue.percentage !== percentage;
    const hasSetOnPercentageChange =
      onPercentageChange && typeof onPercentageChange === 'function';

    if (hasChanged && hasSetOnPercentageChange && !savedOnpercentage) {
      // process here
      onPercentageChange(percentage);
    } else if (hasChanged && hasSetOnPercentageChange && savedOnpercentage) {
      window.top.onPercentageChange(percentage);
    }
  }, [percentage, onPercentageChange, previousValue, savedOnpercentage]);

  if (
    window.top &&
    window.top.Cypress &&
    !savedOnpercentage &&
    onPercentageChange
  ) {
    console.log('loaded');
    // keep reference for testing with cypresss
    window.top.onPercentageChange = onPercentageChange;
    setSaveOnPercentage(true);
  }

  const classes = useStyles();

  if (percentage === 100) {
    return null;
  }

  if (hasTooltip) {
    ProgressBarToUse = TooltipedProgressBar;
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

// export default ProgressBarContainer;
