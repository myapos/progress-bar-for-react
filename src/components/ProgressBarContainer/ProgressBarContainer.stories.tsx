import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBarContainer as ProgressBar } from './ProgressBarContainer';

const meta: Meta<typeof ProgressBar> = {
  title: 'Progress Bar',
  component: ProgressBar,
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Simple: Story = {
  render: (props) => <ProgressBar {...props} />,
  args: {
    percentage: 50,
  },
};

export const ExtraStyles: Story = {
  render: (props) => <ProgressBar {...props} />,
  args: {
    percentage: 80,
    fillerExtraStyles: {
      backgroundColor: 'blue',
    },
  },
};

export const Complex: Story = {
  render: (props) => <ProgressBar {...props} />,
  args: {
    percentage: 50,
    fillerExtraStyles: {
      backgroundColor: 'blue',
    },
    progressBarExtraStyles: {
      position: 'relative',
      height: '5px',
      width: '200px',
      borderRadius: '1px',
      border: '1px solid blue',
      marginTop: '5px',
    },
    tooltipStyle: { marginTop: '30px' },
  },
};

export const ProgressBarStyles: Story = {
  render: (props) => <ProgressBar {...props} />,
  args: {
    percentage: 50,
    fillerExtraStyles: {
      backgroundColor: 'blue',
    },
    progressBarExtraStyles: {
      position: 'relative',
      height: '50px',
      width: '200px',
      borderRadius: '1px',
      border: '1px solid blue',
    },
  },
};

export const Tooltip: Story = {
  render: (props) => <ProgressBar {...props} />,
  args: {
    percentage: 50,
    tooltip: 'demo text',
    tooltipStyle: { marginTop: '30px' },
  },
};

export const ClockedProgressBar: Story = {
  render: (props) => {
    let [percentage, setPercentage] = useState<number>(0);

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
        {...props}
        percentage={percentage}
        tooltip={`${percentage}%`}
      />
    );
  },
  args: {
    tooltipStyle: { marginTop: '30px' },
    fillerExtraStyles: {
      backgroundColor: 'blue',
    },
    progressBarExtraStyles: {
      position: 'relative',
      height: '5px',
      width: '200px',
      borderRadius: '1px',
      border: '1px solid blue',
    },
    onPercentageChange: () => {
      console.log('custom event triggered');
    },
  },
};
