import React from 'react';
import * as Examples from '../Examples';
import '../css/css.styl';

const App = () => {
  return (
    <div id="app-container">
      {Object.keys(Examples).map((key) => {
        const Example = Examples[key];

        return (
          <div id={key} className="example" key={key}>
            <div className="example-label"> {key}</div>
            <Example />
          </div>
        );
      })}
    </div>
  );
};

export default App;
