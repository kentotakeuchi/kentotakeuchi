import React from 'react'
import PropTypes from 'prop-types'
import './header.scss'

const Header = ({ children, className }) => (
  <header className={`header ${className}`}>{children}</header>
)

export default Header
