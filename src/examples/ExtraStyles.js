import React from 'react';
import { ProgressBarContainer as ProgressBar } from '../components/ProgressBarContainer';

const ExtraStyles = () => {
  return (
    <div id="container">
      <ProgressBar
        percentage={80}
        fillerExtraStyles={{
          backgroundColor: 'blue',
        }}
      />
    </div>
  );
};

export default ExtraStyles;
