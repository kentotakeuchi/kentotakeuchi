import React, { useEffect } from 'react'
import Image from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'
import './single-blog.scss'
import Icon from '../../shared/ui-elements/icon/icon'
import useLikes from '../../../hooks/likes-hook'

const SingleBlog = ({ blog, url }: any) => {
  const {
    title,
    description,
    date,
    thumbnail,
    subImages,
    category,
    likes,
    id,
  } = blog

  const {
    hasLikes,
    curLikes,
    setLikes,
    checkLikesHandler,
    updateLikesHandler,
  } = useLikes()
  console.log({ likes, curLikes })

  useEffect(() => {
    // 999 means initial render
    setLikes(curLikes === 999 ? likes : curLikes)
  }, [curLikes])

  useEffect(() => {
    checkLikesHandler(id)
  }, [])

  return (
    <article className="single-blog">
      <header className="single-blog__header">
        <h1>{title}</h1>
        <div className="single-blog__meta-wrapper">
          <p className="single-blog__date">{date}</p>
          <span>|</span>
          <p className="single-blog__category">{category}</p>
        </div>
        <div className="single-blog__likes-wrapper">
          <button
            onClick={() =>
              !hasLikes
                ? updateLikesHandler(id, 'inc')
                : updateLikesHandler(id, 'dec')
            }
          >
            <Icon
              width={20}
              height={20}
              id="icon-heart"
              color={hasLikes ? 'rgb(255, 69, 58)' : 'rgba(255, 69, 58, .5)'}
            />
          </button>
          <span>{curLikes}</span>
        </div>
        <div className="single-blog__social-wrapper">
          <a
            className="twitter-share-button"
            href={`https://twitter.com/intent/tweet`}
            target="_blank"
            rel="noopener noreferrer"
            data-size="large"
            data-text={title}
            data-url={url}
            data-via="KentoTakeuchi"
            data-related="web,soccer"
          />
        </div>
      </header>
      <main className="single-blog__main">
        <BlockContent
          blocks={description}
          className="block-content"
          renderContainerOnSingleChild
        />
        <div className="single-blog__image-wrapper">
          <Image fluid={thumbnail} alt={title} />
          {subImages.map((img: any, i: number) => (
            <Image key={i} fluid={img.asset.fluid} alt={title} />
          ))}
        </div>
      </main>
    </article>
  )
}

export default SingleBlog
