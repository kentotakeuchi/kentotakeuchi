import { setupI18n } from '@lingui/core'
import { en, ja } from 'make-plural'

import { messages as catalogEn } from '../locales/en/messages'
import { messages as catalogJa } from '../locales/ja/messages'

const useI18n = (curLang: string) => {
  const i18n = setupI18n()

  i18n.loadLocaleData({
    en: { plurals: en },
    ja: { plurals: ja },
  })

  i18n.load({
    en: catalogEn,
    ja: catalogJa,
  })

  i18n.activate(curLang)

  return { i18n }
}

export default useI18n
