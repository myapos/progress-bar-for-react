import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ProgressBarContainer as ProgressBar } from '../components/ProgressBarContainer';

const stories = storiesOf('ProgressBar', module);

stories.add('Simple', () => {
  return <ProgressBar percentage={50} />;
});

stories.add('Extra styles', () => {
  return (
    <ProgressBar
      percentage={80}
      fillerExtraStyles={{
        backgroundColor: 'blue',
      }}
    />
  );
});

stories.add('Complex', () => {
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

stories.add('ProgressBarStyles', () => {
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

stories.add('ToolTip', () => {
  return <ProgressBar percentage={50} tooltip="demo text" />;
});

stories.add('ClockedProgressBar', () => {
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
