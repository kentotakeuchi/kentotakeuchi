import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../../hooks/site-metadata-hook'

function SEO({ description, lang, meta, title }) {
  const metadata = useSiteMetadata()
  const metaTitle = lang === 'ja' ? metadata.titleJa : metadata.titleEn
  const metaDescription =
    description || lang === 'ja' ? metadata.descJa : metadata.descEn
  const metaAuthor =
    description || lang === 'ja' ? metadata.authorJa : metadata.authorEn

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${metaTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
