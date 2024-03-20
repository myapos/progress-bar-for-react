import { ProgressBarContainer as ProgressBar } from 'progress_bar_for_react';

import './App.css';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
