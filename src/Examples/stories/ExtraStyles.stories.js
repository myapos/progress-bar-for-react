import React from 'react';
import ProgressBar from '../../components/ProgressBar';

export default { title: 'ExtraStyles' };

export const ExtraStyles = () => (
  <div id="container">
    <ProgressBar
      percentage={50}
      fillerExtraStyles={{
        backgroundColor: 'red',
      }}
    />
  </div>
);
