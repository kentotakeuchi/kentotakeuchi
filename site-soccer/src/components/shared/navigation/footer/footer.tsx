import React, { FunctionComponent } from 'react'
import './footer.scss'

const Footer: FunctionComponent = ({ children }) => {
  return <footer className="footer">{children}</footer>
}

export default Footer
