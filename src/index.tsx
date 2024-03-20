import { createRoot } from 'react-dom/client';

import * as Examples from './examples';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <>
    {(Object.keys(Examples) as Array<keyof typeof Examples>).map((key) => {
      const ExampleToRender = Examples[key];
      return (
        <div key={key} data-testid={key}>
          <h3 style={{ textAlign: 'center' }}>{key}</h3>
          <ExampleToRender />
        </div>
      );
    })}
  </>,
);
