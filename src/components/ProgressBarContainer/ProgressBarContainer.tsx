import { useRef, useEffect, useState } from 'react';

import { ProgressBarContainerProps } from './types';

import withTooltip from '../HOCS/withTooltip';
import usePrevious from '../HOCS/usePrevious';

import { ProgressBar } from '../ProgressBar';

const TooltipedProgressBar = withTooltip(ProgressBar);

export const ProgressBarContainer = ({
  percentage,
  fillerExtraStyles = {},
  progressBarExtraStyles = {},
  tooltip,
  onPercentageChange,
  tooltipStyle,
}: ProgressBarContainerProps) => {
  const ref = useRef<number>();
  // inspired source
  // https://stackoverflow.com/questions/53446020/how-to-compare-oldvalues-and-newvalues-on-react-hooks-useeffect
  const previousValue = usePrevious({ percentage, ref });
  const [savedOnpercentage, setSaveOnPercentage] = useState(false);

  const hasTooltip = tooltip && tooltip.length > 0;

  useEffect(() => {
    const hasChanged = previousValue && previousValue !== percentage;
    const hasSetOnPercentageChange =
      onPercentageChange && typeof onPercentageChange === 'function';

    if (hasChanged && hasSetOnPercentageChange && !savedOnpercentage) {
      // process here
      onPercentageChange(percentage);
    } else if (hasChanged && hasSetOnPercentageChange && savedOnpercentage) {
      window?.top?.onPercentageChange(percentage);
    }
  }, [percentage, onPercentageChange, previousValue, savedOnpercentage]);

  if (window?.top?.Cypress && !savedOnpercentage && onPercentageChange) {
    // keep reference for testing with cypresss
    window.top.onPercentageChange = onPercentageChange;
    setSaveOnPercentage(true);
  }

  if (hasTooltip) {
    return (
      <TooltipedProgressBar
        percentage={percentage}
        fillerExtraStyles={fillerExtraStyles}
        progressBarExtraStyles={progressBarExtraStyles}
        tooltipContent={tooltip}
        tooltipStyle={tooltipStyle}
      />
    );
  }

  return (
    <ProgressBar
      percentage={percentage}
      fillerExtraStyles={fillerExtraStyles}
      progressBarExtraStyles={progressBarExtraStyles}
    />
  );
};
