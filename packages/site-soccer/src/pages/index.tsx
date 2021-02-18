import React from 'react'
import SEO from '../components/seo'
import { navigate } from 'gatsby'
import { t } from '@lingui/macro'

import { getAllLocaleUtils } from '../hooks/i18n-hook'
import useHasMounted from '../hooks/client-only-hook'

const Redirect = () => {
  const { i18n, locale } = getAllLocaleUtils()

  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return null
  }

  navigate(`/${locale}`)

  return (
    <>
      <SEO title={i18n._(t`Home`)} lang={locale} />
      <p>{i18n._(t`Redirecting to home..`)}</p>
    </>
  )
}

export default Redirect
