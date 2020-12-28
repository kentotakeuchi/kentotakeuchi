import React from 'react'
import { Link } from 'gatsby'
import { t } from '@lingui/macro'
import './contact-success.scss'
import SEO from '../components/seo'
import { getAllLocaleUtils } from '../hooks/i18n-hook'

const ContactSuccessPage = () => {
  const { i18n, locale } = getAllLocaleUtils()

  return (
    <>
      <SEO title={i18n._(t`Successfully submitted`)} lang={locale} />
      <div className="contact-success-page">
        <h1>{i18n._(t`Successfully submitted!`)}</h1>
        <Link to={`/${locale}`}>{i18n._(t`Back to home`)}</Link>
      </div>
    </>
  )
}

export default ContactSuccessPage
