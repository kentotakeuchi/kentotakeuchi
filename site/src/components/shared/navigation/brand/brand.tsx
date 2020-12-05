import React from 'react'
import { Link } from 'gatsby'
import { useLingui } from '@lingui/react'
import './brand.scss'
import useSiteMetadata from '../../../../hooks/site-metadata-hook'

const Brand = () => {
  const { i18n } = useLingui()
  const { locale } = i18n
  const { titleJa, titleEn } = useSiteMetadata()

  return (
    <div className={`brand header__brand-wrapper`}>
      <Link to={`/${locale}`}>
        <h1 className={`header__title`} id={`brand-title`}>
          {locale === 'en' ? titleEn : titleJa}
        </h1>
      </Link>
    </div>
  )
}

export default Brand
