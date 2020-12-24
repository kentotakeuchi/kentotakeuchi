import React from 'react'
import { useLingui } from '@lingui/react'
import './language.scss'
import { toggleLocaleHandler } from '../../../../hooks/i18n-hook'
import flag_us from '../../../../asset/images/united-states.png'
import flag_ja from '../../../../asset/images/japan.png'

interface Props {
  place: string
  path: string
}

const Language = ({ place, path }: Props) => {
  const { i18n } = useLingui()
  const { locale } = i18n

  return (
    <ul className={`language language--${place}`}>
      {locale === 'en' && (
        <li>
          <button onClick={() => toggleLocaleHandler(i18n, locale, path)}>
            <img src={flag_ja} alt="japan" />
          </button>
        </li>
      )}
      {locale === 'ja' && (
        <li>
          <button onClick={() => toggleLocaleHandler(i18n, locale, path)}>
            <img src={flag_us} alt="usa" />
          </button>
        </li>
      )}
    </ul>
  )
}

export default Language
