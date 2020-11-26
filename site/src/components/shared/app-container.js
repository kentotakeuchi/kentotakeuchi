import React from 'react'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'

import Layout from './navigation/layout/layout'
import catalogEn from '../../locales/en/messages'
import catalogJa from '../../locales/ja/messages'

const AppContainer = ({ children, location, ...props }) => {
  const { pathname } = location
  const currentLanguage = pathname.split('/')[1] // "en" || "ja"

  // const catalogs = {
  //   en: catalogEn,
  //   ja: catalogJa,
  // }

  i18n.load({
    en: catalogEn,
    ja: catalogJa,
  })
  i18n.activate('en')

  // Merge props, currentLanguage and pathname (inefficient but legible and maintainable <-- destructure & merge)
  const newProps = { ...props, currentLanguage, pathname }

  return (
    <I18nProvider
      // language={currentLanguage}
      // catalogs={{
      //   [currentLanguage]: catalogs[currentLanguage],
      // }}
      i18n={i18n}
      missing="Not found.."
    >
      <Layout {...newProps}>{children}</Layout>
    </I18nProvider>
  )
}

export default AppContainer
