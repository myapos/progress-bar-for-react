import { createRoot } from 'react-dom/client';

import { ProgressBarContainer } from './app';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <ProgressBarContainer
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
      marginTop: '5px',
    }}
    tooltipStyle={{ marginTop: '30px' }}
  />,
);
