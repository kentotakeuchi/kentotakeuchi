import React from 'react'
import ReactDOM from 'react-dom'

import './backdrop.scss'
import useHasMounted from '../../../../hooks/client-only-hook'

interface Props {
  onClick: () => void
}

const Backdrop = ({ onClick }: Props) => {
  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return null
  }

  const backdrop = document.getElementById('backdrop-hook')

  if (!backdrop) {
    throw new Error('Backdrop element not found')
  }

  return ReactDOM.createPortal(
    <div
      className="backdrop"
      onClick={onClick}
      onKeyDown={onClick} // dealt with "jsx-a11y/click-events-have-key-events"
      role="presentation" // dealt with "jsx-a11y/no-noninteractive-element-interactions"
    ></div>,
    backdrop
  )
}

export default Backdrop
