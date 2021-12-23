import React from 'react';
import ProgressBar from '../components/ProgressBar';

const ToolTip = () => (
  <div id="container">
    <ProgressBar percentage={50} tooltip="demo text" />
  </div>
);

export default ToolTip;
