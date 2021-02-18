import React, { FunctionComponent } from 'react'
import './ticker.scss'

const Ticker: FunctionComponent = ({ children }) => {
  return (
    <section className="ticker">
      <div className="ticker__scroll ticker__text1">
        <div>{children}</div>
      </div>
    </section>
  )
}

export default Ticker
