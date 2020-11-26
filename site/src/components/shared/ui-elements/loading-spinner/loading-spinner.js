import React from 'react'
import './loading-spinner.scss'

const LoadingSpinner = ({ overlay }) => {
  return (
    <div
      key="loading-spinner"
      id="loading-spinner"
      className={`loading-spinner ${overlay && 'overlay'}`}
    >
      <span>kento takeuchi</span>
      <span style={{ '--i': 1 }}>.</span>
      <span style={{ '--i': 2 }}>.</span>
      <span style={{ '--i': 3 }}>.</span>
    </div>
  )
}

export default LoadingSpinner
