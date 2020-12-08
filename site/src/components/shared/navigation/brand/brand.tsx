import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { useLingui } from '@lingui/react'
import './brand.scss'
import useSiteMetadata from '../../../../hooks/site-metadata-hook'
import shuffleText from '../../../../utils/suffle-text'

const Brand = () => {
  const { i18n } = useLingui()
  const { locale } = i18n
  const { titleJa, titleEn } = useSiteMetadata()

  useEffect(() => {
    shuffleText('brand-title')
  }, [])

  return (
    <div className={`brand`}>
      <Link to={`/${locale}`}>
        <h1 className={`brand__title`} id={`brand-title`}>
          {locale === 'en' ? titleEn : titleJa}
        </h1>
      </Link>
    </div>
  )
}

export default Brand
