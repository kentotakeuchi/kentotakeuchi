import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { useLingui } from '@lingui/react'
import './card.scss'

interface Props {
  item: any
  place: string
}

const Card = ({ item, place }: Props) => {
  const { i18n } = useLingui()
  const { locale } = i18n

  const { title, date, category, slug, thumbnail } = item

  let cateColor
  switch (category) {
    case 'dev':
    case '開発':
      cateColor = 'green'
      break
    case 'soccer':
    case 'サッカー':
      cateColor = 'red'
      break
    default:
      break
  }

  let url
  switch (place) {
    case 'recommended-blog':
      url = `./blog/${slug}`
      break
    case 'blogs-page':
      url = `/${locale}/blog/${slug}`
      break
    case 'blog-page':
      url = `/${locale}/blog/${slug}`
      break
    default:
      break
  }

  if (!url) {
    throw new Error('No place found')
  }

  return (
    <div className="card">
      <div className="card__image-wrapper">
        <Link to={url}>
          <Image fluid={thumbnail} alt={title} />
        </Link>
      </div>
      <div className="card__text-wrapper">
        <span className={`card__category ${cateColor && cateColor}`}>
          {category}
        </span>
        <span className="card__date">{date}</span>
        <h3 className="card__title">{title}</h3>
      </div>
    </div>
  )
}

export default Card
