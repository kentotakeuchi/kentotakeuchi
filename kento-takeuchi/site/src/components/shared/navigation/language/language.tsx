import React from 'react'
import { navigate } from 'gatsby'
import { useLingui } from '@lingui/react'
import './language.scss'
import flag_us from '../../../../asset/images/united-states.png'
import flag_ja from '../../../../asset/images/japan.png'

interface Props {
  place: string
  path: string
}

const Language = ({ place, path }: Props) => {
  const { i18n } = useLingui()
  const { locale } = i18n

  // TODO: i think this approach is not good..
  const toggleLangHandler = (lang: string): void => {
    console.log({ path, lang })

    i18n.activate(lang === 'en' ? 'ja' : 'en')
    lang === 'en'
      ? navigate(path.replace('en', 'ja'))
      : navigate(path.replace('ja', 'en'))
  }

  return (
    <ul className={`language language--${place}`}>
      {locale === 'en' && (
        <li>
          <button onClick={() => toggleLangHandler(locale)}>
            <img src={flag_ja} alt="japan" />
          </button>
        </li>
      )}
      {locale === 'ja' && (
        <li>
          <button onClick={() => toggleLangHandler(locale)}>
            <img src={flag_us} alt="usa" />
          </button>
        </li>
      )}
    </ul>
  )
}

export default Language
