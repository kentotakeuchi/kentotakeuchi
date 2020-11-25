import React from 'react'
import './loading-spinner.scss'

const LoadingSpinner = ({ overlay }) => {
  return (
    <div
      key="loading-spinner"
      id="loading-spinner"
      className={`loading-spinner ${overlay && 'overlay'}`}
    >
      <div className={`loading-spinner--real`}>
        <span style={{ '--i': 1 }}>l</span>
        <span style={{ '--i': 2 }}>o</span>
        <span style={{ '--i': 3 }}>a</span>
        <span style={{ '--i': 4 }}>d</span>
        <span style={{ '--i': 5 }}>i</span>
        <span style={{ '--i': 6 }}>n</span>
        <span style={{ '--i': 7 }}>g</span>
        <span style={{ '--i': 8 }}>.</span>
        <span style={{ '--i': 9 }}>.</span>
        <span style={{ '--i': 10 }}>.</span>
      </div>

      <div className={`loading-spinner--reflect`}>
        <span style={{ '--i': 1 }}>l</span>
        <span style={{ '--i': 2 }}>o</span>
        <span style={{ '--i': 3 }}>a</span>
        <span style={{ '--i': 4 }}>d</span>
        <span style={{ '--i': 5 }}>i</span>
        <span style={{ '--i': 6 }}>n</span>
        <span style={{ '--i': 7 }}>g</span>
        <span style={{ '--i': 8 }}>.</span>
        <span style={{ '--i': 9 }}>.</span>
        <span style={{ '--i': 10 }}>.</span>
      </div>
    </div>
  )
}

export default LoadingSpinner
