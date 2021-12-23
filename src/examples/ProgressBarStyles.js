import React from 'react';
import ProgressBar from '../lib/ProgressBar';

const ProgressBarStyles = () => (
  <div id="container">
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
  </div>
);

export default ProgressBarStyles;
