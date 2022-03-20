import React, { useEffect, useState } from 'react';
import { ProgressBarContainer as ProgressBar } from '../components/ProgressBarContainer';

const ToolTip = () => {
  return (
    <div id="container">
      <ProgressBar percentage={50} tooltip="demo text" />
    </div>
  );
};

export default ToolTip;
