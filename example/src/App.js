import React from 'react';
import * as SettingExamples from './setting_examples';

const App = () => {
  return (
    <div id="examples">
      {Object.keys(SettingExamples).map((key) => {
        const ExampleToRender = SettingExamples[key];
        return (
          <div key={key}>
            <h3 style={{ textAlign: 'center' }}>{key}</h3>
            <ExampleToRender />
          </div>
        );
      })}
    </div>
  );
};

export default App;
