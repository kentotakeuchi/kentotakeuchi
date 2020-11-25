import React from 'react'
import { Trans } from '@lingui/macro'
import './related-items.scss'

// TODO: refactor > combine this with "recommended products" and "related news" +++ ugly logic
const RelatedItems = ({ title, children }) => {
  console.log({ title })
  return (
    <section className="related-items">
      <h2>
        <Trans id={title} />
      </h2>
      <div className="related-items__items-wrapper">{children}</div>
    </section>
  )
}

export default RelatedItems
