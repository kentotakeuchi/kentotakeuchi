import React from 'react'
import './loading-spinner.scss'

interface Props {
  overlay: boolean
}

const LoadingSpinner = ({ overlay }: Props) => {
  return (
    <div
      key="loading-spinner"
      id="loading-spinner"
      className={`loading-spinner ${overlay && 'overlay'}`}
    >
      <span>kento takeuchi</span>
      <span style={{ '--i': 1 } as React.CSSProperties}>.</span>
      <span style={{ '--i': 2 } as React.CSSProperties}>.</span>
      <span style={{ '--i': 3 } as React.CSSProperties}>.</span>
    </div>
  )
}

export default LoadingSpinner
