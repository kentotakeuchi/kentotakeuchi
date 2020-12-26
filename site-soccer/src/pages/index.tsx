import React from 'react'
import SEO from '../components/seo'
import { navigate } from 'gatsby'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'

import useHasMounted from '../hooks/client-only-hook'

// IF user comes from "/" --> redirect to /en
const Redirect = () => {
  const { i18n } = useLingui()
  const { locale } = i18n

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