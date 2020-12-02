import React, { FunctionComponent } from 'react'
import { useLingui } from '@lingui/react'
import './related-items.scss'

interface Props {
  title: string
}

const RelatedItems: FunctionComponent<Props> = ({ title, children }) => {
  const { i18n } = useLingui()

  return (
    <section className="related-items">
      <h2>{i18n._(title)}</h2>
      <div className="related-items__items-wrapper">{children}</div>
    </section>
  )
}

export default RelatedItems
