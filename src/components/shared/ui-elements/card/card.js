import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { Trans } from '@lingui/macro'
// import BlockContent from '@sanity/block-content-to-react'
import './card.scss'
import AddToCart from '../../../store/add-to-cart/add-to-cart'
import Avatar from '../avatar/avatar'
import Icon from '../icon/icon'
import useCart from '../../../../hooks/cart-hook'

const Card = ({
  // width,
  height,
  src,
  slug,
  name,
  price,
  currency,
  product,
  title,
  description,
  date,
  author,
  authorImage,
  category,
  stock,
  lang,
  place,
}) => {
  const { formatCurrencyString } = useCart()

  let url
  switch (place) {
    case 'featured-products':
      url = `./store/${slug}`
      break
    case 'recommended-blog':
      url = `./blog/${slug}`
      break
    case 'store-page':
      url = `/${lang}/store/${slug}`
      break
    case 'product-page':
      url = `/${lang}/store/${slug}`
      break
    case 'blog-list-page':
      url = `/${lang}/blog/${slug}`
      break
    case 'blog-page':
      url = `/${lang}/blog/${slug}`
      break
    case 'news-page':
      url = `/${lang}/news/${slug}`
      break
    default:
      url = `./`
      break
  }

  return (
    <div className="card">
      <Link to={url}>
        <div className="card__sub-info-wrapper">
          <span>{/*category*/}&nbsp;</span>
          {/* Only product */}
          {0 < stock && stock < 4 && (
            <span className="card__stock">
              <Trans>残りわずか</Trans>
            </span>
          )}
          {stock === 0 && (
            <span className="card__stock">
              <Trans>在庫なし</Trans>
            </span>
          )}
          {/* Blog or News */}
          {date && <span className="card__date">{date}</span>}
        </div>
        <Image
          fluid={src}
          alt={name}
          style={{ /*width: `${width}rem`,*/ height: `${height}rem` }}
        />
      </Link>

      {/* PRODUCT */}
      {product && (
        <div className="card__prod-info-wrapper">
          <p>{name}</p>
          <p>
            {formatCurrencyString({
              value: parseInt(price),
              currency: currency,
            })}
          </p>
          <AddToCart product={product} />
        </div>
      )}

      {/* BLOG */}
      {author && (
        <div className="card__blog-info-wrapper">
          <h3>{title.length > 20 ? `${title.substring(0, 20)}..` : title}</h3>
          <Avatar src={authorImage} alt={author} width={35} height={35} />
          {/* TODO: can be better */}
          <p>
            {description[0].children[0].text.length > 100
              ? `${description[0].children[0].text.substring(0, 100)}..`
              : description[0].children[0].text}
          </p>
          {/* <Link to={url}>
            <Icon
              width={30}
              height={30}
              id="icon-circle-arrow"
              color="rgb(242,242,242)"
            />
          </Link> */}
        </div>
      )}

      {/* NEWS */}
      {place === 'news-page' && (
        <div className="card__news-info-wrapper">
          <h3>{title.length > 20 ? `${title.substring(0, 20)}..` : title}</h3>
          {/* TODO: can be better */}
          <p>
            {description[0].children[0].text.length > 100
              ? `${description[0].children[0].text.substring(0, 100)}..`
              : description[0].children[0].text}
          </p>
          <Link to={url}>
            <Icon
              width={30}
              height={30}
              id="icon-circle-arrow"
              color="rgb(242,242,242)"
            />
          </Link>
        </div>
      )}
    </div>
  )
}

export default Card
