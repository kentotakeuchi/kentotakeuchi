import React from 'react'
import { Link } from 'gatsby'
import { useLingui } from '@lingui/react'
import './brand.scss'
import useSiteMetadata from '../../../../hooks/site-metadata-hook'

interface Props {
  place: string
}

const Brand = ({ place }: Props) => {
  const { i18n } = useLingui()
  const { locale } = i18n
  const { titleJa, titleEn } = useSiteMetadata()

  return (
    <div className={`brand`}>
      <Link to={`/${locale}`}>
        <h1 className={`brand__title`}>
          {locale === 'en' ? titleEn : titleJa}
        </h1>
      </Link>
    </div>
  )
}

export default Brand
