import React, { FunctionComponent } from 'react'
import { PageProps } from 'gatsby'
import { setupI18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { en, ja } from 'make-plural/plurals'

import Layout from './navigation/layout/layout'
import { messages as catalogEn } from '../../locales/en/messages'
import { messages as catalogJa } from '../../locales/ja/messages'

const AppContainer: FunctionComponent<PageProps> = ({
  children,
  location,
  ...props
}) => {
  const { pathname } = location
  const curLang = pathname.split('/')[1] // "en" || "ja"

  const i18n = setupI18n()
  i18n.loadLocaleData('en', { plurals: en })
  i18n.loadLocaleData('ja', { plurals: ja })
  i18n.load({
    en: catalogEn,
    ja: catalogJa,
  })
  i18n.activate(curLang)

  // Merge props, and pathname (inefficient but legible and maintainable <-- destructure & merge)
  const newProps = { ...props, pathname }

  return (
    <I18nProvider i18n={i18n}>
      <Layout {...newProps}>{children}</Layout>
    </I18nProvider>
  )
}

export default AppContainer
