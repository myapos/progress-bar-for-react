import React, { useEffect, useState } from 'react';
import { ProgressBarContainer as ProgressBar } from '../components/ProgressBarContainer';

const Simple = () => {
  return (
    <div id="container">
      <ProgressBar percentage={50} />
    </div>
  );
};

export default Simple;
