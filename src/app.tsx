import { ReactNode } from 'react';
import { ProgressBarContainer as ProgressBar } from './components/ProgressBarContainer/ProgressBarContainer';

import { ProgressBarContainerProps } from './components/ProgressBarContainer/types';

interface ProgressBarProps extends ProgressBarContainerProps {
  children?: ReactNode;
}

export const ProgressBarContainer = (props: ProgressBarProps) => {
  const { children, ...restProps } = props;
  return <ProgressBar {...restProps}> {children} </ProgressBar>;
};
