import React from 'react';
import { ProgressBarContainer as ProgressBar } from './components/ProgressBarContainer/ProgressBarContainer';

export const ProgressBarContainer = (props) => {
  const { children, ...restProps } = props;
  return <ProgressBar {...restProps}> {children} </ProgressBar>;
};
