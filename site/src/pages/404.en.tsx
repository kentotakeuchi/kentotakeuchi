import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'
import '../styles/pages/404.scss'
import SEO from '../components/shared/seo'
import Icon from '../components/shared/ui-elements/icon/icon'
import shuffleText from '../utils/suffle-text'

const NotFoundPage = () => {
  const { i18n } = useLingui()
  const { locale } = i18n

  useEffect(() => {
    let ids = ['gbth']

    ids.forEach(id => {
      shuffleText(id)
    })
  }, [])

  return (
    <>
      <SEO title={i18n._(t`Page Not Found`)} lang={locale} />
      <section className="not-found-page">
        <h1>{i18n._(t`Page Not Found`)}</h1>
        <div className="not-found-page__link-wrapper">
          <Link to={`/${locale}`} id="gbth">
            {i18n._(t`Go back to home`)}
          </Link>
          <Icon
            width={15}
            height={30}
            id="icon-arrow"
            color="rgb(245, 245, 245)"
          />
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
