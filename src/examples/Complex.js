import React from 'react';
import ProgressBar from 'lib/ProgressBar';

const Complex = () => (
  <div id="container">
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
  </div>
);

export default Complex;
