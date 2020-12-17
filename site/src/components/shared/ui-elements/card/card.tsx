import React, { useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { useLingui } from '@lingui/react'
import './card.scss'
import Icon from '../icon/icon'
import likesContext from '../../../../contexts/likes-context'

interface Props {
  item: any
  place: string
}

const Card = ({ item, place }: Props) => {
  const { i18n } = useLingui()
  const { locale } = i18n

  const { title, date, category, slug, thumbnail, /*likes,*/ id } = item

  const { allLikes, hasLikes, checkLikes, updateLikes } = useContext(
    likesContext
  )

  useEffect(() => {
    checkLikes(id)
  }, [])

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
    case 'test':
    case 'テスト':
      cateColor = 'gray'
      break
    case 'random':
    case 'ランダム':
      cateColor = 'blue'
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
        <h3 className="card__title">
          {title.length > 20 ? `${title.substring(0, 20)}..` : title}
        </h3>
        <div className="card__likes-wrapper">
          <button
            onClick={() =>
              !hasLikes[id] ? updateLikes(id, 'inc') : updateLikes(id, 'dec')
            }
          >
            <Icon
              width={20}
              height={20}
              id="icon-heart"
              color={
                hasLikes[id] ? 'rgb(255, 69, 58)' : 'rgba(255, 69, 58, .5)'
              }
            />
          </button>
          <span>{allLikes[id]}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
