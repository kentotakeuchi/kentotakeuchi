import React from 'react'
import ReactDOM from 'react-dom'

import './backdrop.scss'
import useHasMounted from '../../../../hooks/client-only-hook'

const Backdrop = props => {
  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return null
  }

  return ReactDOM.createPortal(
    <div
      className="backdrop"
      onClick={props.onClick}
      onKeyDown={props.onClick} // dealt with "jsx-a11y/click-events-have-key-events"
      role="presentation" // dealt with "jsx-a11y/no-noninteractive-element-interactions"
    ></div>,
    document.getElementById('backdrop-hook')
  )
}

export default Backdrop
