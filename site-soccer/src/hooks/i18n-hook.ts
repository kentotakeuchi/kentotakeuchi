import { navigate } from 'gatsby'
import { useLingui } from '@lingui/react'
import { setupI18n, I18n } from '@lingui/core'
import { en, ja } from 'make-plural'

import { messages as catalogEn } from '../locales/en/messages'
import { messages as catalogJa } from '../locales/ja/messages'

const useI18n = (curLocale: string) => {
  const i18n = setupI18n()

  i18n.loadLocaleData({
    en: { plurals: en },
    ja: { plurals: ja },
  })

  i18n.load({
    en: catalogEn,
    ja: catalogJa,
  })

  i18n.activate(curLocale)

  return { i18n }
}

export default useI18n

// TODO: i think this approach is not good..
// toggle en and ja
export const toggleLocaleHandler = (
  i18n: I18n,
  curLocale: string,
  path: string
): void => {
  console.log({ path, curLocale })

  i18n.activate(curLocale === 'en' ? 'ja' : 'en')
  curLocale === 'en'
    ? navigate(path.replace('en', 'ja'))
    : navigate(path.replace('ja', 'en'))
}

// get all locale utilities to translate
export const getAllLocaleUtils = () => {
  const { i18n } = useLingui()
  const { locale } = i18n

  return { i18n, locale }
}
