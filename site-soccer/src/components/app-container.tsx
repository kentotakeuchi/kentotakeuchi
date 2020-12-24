import React, { FunctionComponent } from 'react'
import { I18nProvider } from '@lingui/react'

import Layout from './shared/navigation/layout/layout'
import useI18n from '../hooks/i18n-hook'

const AppContainer: FunctionComponent<any> = props => {
  // store a current language
  const curLang = props.pageContext.langKey || props.pageContext.language

  // set up i18n stuff
  const { i18n } = useI18n(curLang)

  return (
    <I18nProvider i18n={i18n}>
      <Layout {...props}>{props.children}</Layout>
    </I18nProvider>
  )
}

export default AppContainer
