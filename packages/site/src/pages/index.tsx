import React from 'react'
import SEO from '../components/shared/seo'
import { navigate, PageProps } from 'gatsby'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'

import useHasMounted from '../hooks/client-only-hook'

// IF user comes from "/" --> redirect to /en
const Redirect = (props: PageProps) => {
  console.log({ props })

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
