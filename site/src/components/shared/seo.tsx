import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../../hooks/site-metadata-hook'

interface Props {
  title: string
  lang: string
  description?: string
  meta?: any // TODO: type..
}

// TODO: type..
function SEO({ description, lang, /*meta,*/ title, url }: any) {
  const metadata = useSiteMetadata()
  const metaTitle = lang === 'ja' ? metadata.titleJa : metadata.titleEn
  const metaDescription =
    description || lang === 'ja' ? metadata.descJa : metadata.descEn
  const metaAuthor =
    description || lang === 'ja' ? metadata.authorJa : metadata.authorEn

  const canonical = url ? url : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${metaTitle}`}
      meta={
        [
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
        ] /*.concat(meta)*/
      }
      link={[
        // {
        //   rel: `canonical`,
        //   href: `/web/tweet-button`,
        // },
        canonical
          ? {
              rel: 'canonical',
              href: canonical,
            }
          : {},
      ]}
      script={[
        {
          type: `text/javascript`,
          async: true,
          src: `https://platform.twitter.com/widgets.js`,
        },
      ]}
    />
  )
}

export default SEO
