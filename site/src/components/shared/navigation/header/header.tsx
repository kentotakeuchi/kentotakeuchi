import React, { FunctionComponent } from 'react'
import './header.scss'

interface Props {
  className?: string
}

const Header: FunctionComponent<Props> = ({ children, className }) => (
  <header className={`header ${className}`}>{children}</header>
)

export default Header
