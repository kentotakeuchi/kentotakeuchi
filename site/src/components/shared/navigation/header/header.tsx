import React, { FunctionComponent } from 'react'
import './header.scss'

const Header: FunctionComponent = ({ children }) => (
  <header className={`header`}>{children}</header>
)

export default Header
