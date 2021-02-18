import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { Trans } from '@lingui/macro'

import './modal.scss'
import Backdrop from '../backdrop/backdrop'
import useHasMounted from '../../../../hooks/client-only-hook'

const ModalOverlay = ({ header, onSubmit, children, footer }) => {
  const content = (
    <div className={`modal`}>
      <header className={`modal__header`}>
        <h2>
          <Trans id={header} />
        </h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : event => event.preventDefault()}>
        <div className={`modal__content`}>{children}</div>
        <footer className={`modal__footer`}>{footer}</footer>
      </form>
    </div>
  )
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

const Modal = props => {
  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return null
  }

  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  )
}

export default Modal
