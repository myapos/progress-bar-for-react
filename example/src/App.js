import React from 'react'
import * as SettingExamples from './setting_examples'

const App = () => {
  console.log(SettingExamples)
  return (
    <div id='examples'>
      {Object.keys(SettingExamples).map((key) => {
        const ExampleToRender = SettingExamples[key]
        return (
          <div>
            <h3 style={{ textAlign: 'center' }}>{key}</h3>
            <ExampleToRender />
          </div>
        )
      })}
    </div>
  )
}

export default App
