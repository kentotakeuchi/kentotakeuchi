import React from 'react'
import { Link } from 'gatsby'
import './button.scss'

const Button = ({
  size,
  type,
  onClick,
  disabled,
  inverse,
  children,
  to,
  className,
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`button button--${size || 'default'} ${
          inverse && 'button--inverse'
        } ${className && className}`}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={`button button--${size || 'default'}
  ${inverse && 'button--inverse'} ${className && className}`}
      type={type ? type : 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
