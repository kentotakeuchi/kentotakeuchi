import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'
import './brand.scss'
import useSiteMetadata from '../../../../hooks/site-metadata-hook'
import shuffleText from '../../../../utils/suffle-text'

interface Props {
  place: string
  className?: string
}

const Brand = ({ place, className }: Props) => {
  const { i18n } = useLingui()
  const { locale } = i18n
  const { titleJa, titleEn } = useSiteMetadata()

  useEffect(() => {
    const ids = [
      'brand-title--layout',
      'brand-title--header',
      'brand-sub--layout',
      'brand-sub--header',
    ]
    ids.forEach(id => {
      shuffleText(id)
    })
  }, [])

  return (
    <div className={`brand ${className ? className : ''}`}>
      <Link to={`/${locale}`}>
        <h1 className={`brand__title`} id={`brand-title--${place}`}>
          {locale === 'en' ? titleEn : titleJa}
        </h1>
        <h3 className="brand__sub" id={`brand-sub--${place}`}>
          {i18n._(t`web developer`)}
        </h3>
      </Link>
    </div>
  )
}

export default Brand
