import React from 'react'
import { ProgressBarContainer as ProgressBar } from 'progress_bar_for_react'

const ToolTip = () => {
  return (
    <div id='container'>
      <ProgressBar percentage={50} tooltip='demo text' />
    </div>
  )
}

export default ToolTip
