import React from 'react';
import ProgressBar from '../../components/ProgressBar';

export default { title: 'Tooltip' };

export const ToolTip = () => (
  <div id="container">
    <ProgressBar percentage={50} tooltip="demo text" />
  </div>
);
