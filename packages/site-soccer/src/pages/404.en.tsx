import React from 'react'
import { Link } from 'gatsby'
import { t } from '@lingui/macro'
import './contact-success.scss'
import SEO from '../components/seo'
import { getAllLocaleUtils } from '../hooks/i18n-hook'

const NotFoundPage = () => {
  const { i18n, locale } = getAllLocaleUtils()

  return (
    <>
      <SEO title={i18n._(t`404: Page not found`)} lang={locale} />
      <div className="not-found-page">
        <h1>{i18n._(t`Oops.. Page not found`)}</h1>
        <Link to={`/${locale}`}>{i18n._(t`Back to home`)}</Link>
      </div>
    </>
  )
}

export default NotFoundPage
