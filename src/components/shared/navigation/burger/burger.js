import React from 'react'

import './burger.scss'

// TODO: consider more reusable component..
const Burger = ({ onClick, isOpen }) => {
  return (
    <button
      className={`burger__btn ${isOpen && 'burger__btn--open'}`}
      onClick={onClick}
    >
      <span className="burger__icon" />
    </button>
  )
}

export default Burger
