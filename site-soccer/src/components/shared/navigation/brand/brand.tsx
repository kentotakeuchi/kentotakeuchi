import React from 'react'
import { Link } from 'gatsby'
import { t } from '@lingui/macro'
import './brand.scss'
import useSiteMetadata from '../../../../hooks/site-metadata-hook'
import { getAllLocaleUtils } from '../../../../hooks/i18n-hook'

interface Props {
  place: string
}

const Brand = ({ place }: Props) => {
  const { i18n, locale } = getAllLocaleUtils()
  const { titleJa, titleEn } = useSiteMetadata()

  return (
    <div className={`brand`}>
      <Link to={`/${locale}`}>
        <h1 className={`brand__title`}>
          {locale === 'en' ? titleEn : titleJa}
        </h1>
        <h3 className="brand__sub">{i18n._(t`Enjoy improving together`)}</h3>
      </Link>
    </div>
  )
}

export default Brand
