import React, { Component, useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';

import ProgressBar from '../../components/ProgressBar';

export default { title: 'OnPercentageChange' };

export const OnPercentageChange = () => {
  let [percentage, setPercentage] = useState(0);
  let [dataOnChange, setDataOnChange] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(percentage++);
      if (percentage === 100) {
        setPercentage(0);
      }
    }, 100);

    window.document.addEventListener('onPercentageChange', function (e) {
      console.log('data received', e.detail);
      setDataOnChange(e.detail);
      action('percentage changed')();
    });
    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div id="container">
      <div
        style={{
          textAlign: 'center',
          padding: '5px',
          color: 'red',
          fontSize: 'larger',
        }}
      >
        Changed: {dataOnChange}
      </div>
      <ProgressBar
        percentage={percentage}
        tooltip={`${percentage}%`}
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
        onPercentageChange={(e) => {
          // set data on change
          setDataOnChange(e);
          action('percentage changed')();
        }}
      />
    </div>
  );
};
