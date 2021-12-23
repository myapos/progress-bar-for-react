import React from 'react';
import ProgressBar from '../lib/ProgressBar';

const ExtraStyles = () => (
  <div id="container">
    <ProgressBar
      percentage={50}
      fillerExtraStyles={{
        backgroundColor: 'red',
      }}
    />
  </div>
);

export default ExtraStyles;
