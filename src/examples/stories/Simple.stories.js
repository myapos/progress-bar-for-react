import React from 'react';
import ProgressBar from '../../lib/ProgressBar';

export default { title: 'Simple' };

// top.window.__coverage__ = window.__coverage__;

export const Simple = () => (
  <div id="container">
    <ProgressBar percentage={50} />
  </div>
);
