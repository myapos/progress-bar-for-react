import React, { useEffect, useState } from 'react';

import ProgressBar from '../../components/ProgressBar';

export default { title: 'Clocked' };

export const Clocked = () => {
  let [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(percentage++);
    }, 100);

    if (percentage === 100) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div id="container">
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
      />
    </div>
  );
};
