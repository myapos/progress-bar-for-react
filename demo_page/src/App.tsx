import { useState, useEffect } from 'react';
import { ProgressBarContainer as ProgressBar } from 'progress_bar_for_react';

import './App.css';

const Title = ({ title }: { title: string }) => {
  return <div className="title">{title}</div>;
};

function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((percentage) => percentage + 1);
      if (percentage === 100) {
        setPercentage(0);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="container">
      <Title title="Simple" />
      <ProgressBar percentage={50} />

      <Title title="Tooltip" />
      <ProgressBar percentage={50} tooltip="demo text" />

      <Title title="ProgressBarStyles" />
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

      <Title title="ExtraStyles" />
      <ProgressBar
        percentage={80}
        fillerExtraStyles={{
          backgroundColor: 'blue',
        }}
      />

      <Title title="Complex" />
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

      <Title title="ClockedProgressBar" />
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
}

export default App;
