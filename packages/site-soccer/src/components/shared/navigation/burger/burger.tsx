import React from 'react'
import './burger.scss'

interface Props {
  onClick: () => void
  isOpen: boolean
  className?: string
}

const Burger = ({ onClick, isOpen, className }: Props) => {
  return (
    <button
      className={`burger ${isOpen && 'burger--open'} ${
        className ? className : ''
      }`}
      onClick={onClick}
    >
      <span className="burger__icon" />
    </button>
  )
}

export default Burger
