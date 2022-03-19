import React from 'react'
import { ProgressBarContainer as ProgressBar } from 'progress_bar_for_react'

const Complex = () => {
  return (
    <div id='container'>
      <ProgressBar
        percentage={50}
        tooltip='this is a long text tooltip example'
        fillerExtraStyles={{
          backgroundColor: 'blue'
        }}
        progressBarExtraStyles={{
          position: 'relative',
          height: '5px',
          width: '200px',
          borderRadius: '1px',
          border: '1px solid blue'
        }}
      />
    </div>
  )
}

export default Complex
