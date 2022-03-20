import React from 'react'
import { ProgressBarContainer as ProgressBar } from 'progress_bar_for_react'

const ProgressBarStyles = () => {
  return (
    <div id='container'>
      <ProgressBar
        percentage={50}
        fillerExtraStyles={{
          backgroundColor: 'blue'
        }}
        progressBarExtraStyles={{
          position: 'relative',
          height: '50px',
          width: '200px',
          borderRadius: '1px',
          border: '1px solid blue'
        }}
      />
    </div>
  )
}

export default ProgressBarStyles
