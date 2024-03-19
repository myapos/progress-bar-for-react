import { createRoot } from 'react-dom/client';

import { ProgressBarContainer } from './app';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(<ProgressBarContainer percentage={50} />);
