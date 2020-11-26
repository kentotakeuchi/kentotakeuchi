import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import './side-drawer.scss'
import Backdrop from '../../ui-elements/backdrop/backdrop'
import useHasMounted from '../../../../hooks/client-only-hook'

const SideDrawer = ({ show, onCancel, children }) => {
  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return null
  }

  const content = (
    <React.Fragment>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        timeout={300}
        classNames="slide"
        mountOnEnter
        unmountOnExit
      >
        <aside
          className="side-drawer"
          onClick={onCancel}
          onKeyDown={onCancel} // dealt with "jsx-a11y/click-events-have-key-events"
          role="presentation" // dealt with "jsx-a11y/no-noninteractive-element-interactions"
        >
          {children}
        </aside>
      </CSSTransition>
    </React.Fragment>
  )

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
}

export default SideDrawer
