import React from 'react'
import './burger.scss'

interface Props {
  onClick: () => void
  isOpen: boolean
}

const Burger = ({ onClick, isOpen }: Props) => {
  return (
    <button className={`burger ${isOpen && 'burger--open'}`} onClick={onClick}>
      <span className="burger__icon" />
    </button>
  )
}

export default Burger
