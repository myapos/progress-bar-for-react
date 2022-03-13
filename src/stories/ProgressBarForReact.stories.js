import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ProgressBarContainer as ProgressBar } from '../components/ProgressBarContainer';

export const stories = storiesOf('ProgressBar', module);

stories.add('simple', () => {
  return <ProgressBar percentage={50} />;
});

stories.add('extra_styles', () => {
  return (
    <ProgressBar
      percentage={80}
      fillerExtraStyles={{
        backgroundColor: 'blue',
      }}
    />
  );
});

stories.add('complex', () => {
  return (
    <ProgressBar
      percentage={50}
      tooltip="this is a long text tooltip example"
      fillerExtraStyles={{
        backgroundColor: 'blue',
      }}
      progressBarExtraStyles={{
        position: 'relative',
        height: '5px',
        width: '200px',
        borderRadius: '1px',
        border: '1px solid blue',
      }}
    />
  );
});

stories.add('progress_bar_styles', () => {
  return (
    <ProgressBar
      percentage={50}
      fillerExtraStyles={{
        backgroundColor: 'blue',
      }}
      progressBarExtraStyles={{
        position: 'relative',
        height: '50px',
        width: '200px',
        borderRadius: '1px',
        border: '1px solid blue',
      }}
    />
  );
});

stories.add('tooltip', () => {
  return <ProgressBar percentage={50} tooltip="demo text" />;
});

stories.add('clocked_progress_bar', () => {
  let [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(percentage++);
      if (percentage === 100) {
        setPercentage(0);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <ProgressBar
      percentage={percentage}
      tooltip={`${percentage}%`}
      fillerExtraStyles={{
        backgroundColor: 'blue',
      }}
      progressBarExtraStyles={{
        position: 'relative',
        height: '5px',
        width: '200px',
        borderRadius: '1px',
        border: '1px solid blue',
      }}
    />
  );
});
