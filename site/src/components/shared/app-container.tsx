import React, { FunctionComponent } from 'react'
import { PageProps } from 'gatsby'
import { I18nProvider } from '@lingui/react'

import Layout from './navigation/layout/layout'
import useI18n from '../../hooks/i18n-hook'

const AppContainer: FunctionComponent<PageProps> = ({
  children,
  location,
  ...props
}: any) => {
  console.log({ location, props })
  console.log(props.pageContext.langKey, props.pageContext.language)

  const { pathname } = location
  // const curLang = pathname.split('/')[1] // "en" || "ja"
  const curLang = props.pageContext.langKey || props.pageContext.language

  // set up i18n stuff
  const { i18n } = useI18n(curLang)

  console.log({ i18n })

  // Merge props, and pathname (inefficient but legible and maintainable <-- destructure & merge)
  const newProps = { ...props, pathname }
  return (
    <I18nProvider i18n={i18n}>
      <Layout {...newProps}>{children}</Layout>
    </I18nProvider>
  )
}

export default AppContainer
