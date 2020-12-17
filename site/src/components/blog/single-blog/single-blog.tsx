import React, { useEffect, useContext } from 'react'
import Image from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'
import './single-blog.scss'
import Icon from '../../shared/ui-elements/icon/icon'
import likesContext from '../../../contexts/likes-context'

// TODO: type..
interface Props {
  blog: any
  url: string
}

const SingleBlog = ({ blog, url }: Props) => {
  const {
    title,
    description,
    publishedAt,
    thumbnail,
    subImages,
    category,
    // likes,
    id,
  } = blog

  const { allLikes, hasLikes, checkLikes, updateLikes } = useContext(
    likesContext
  )

  useEffect(() => {
    checkLikes(id)
  }, [])

  return (
    <article className="single-blog">
      <header className="single-blog__header">
        <h1>{title}</h1>
        <div className="single-blog__meta-wrapper">
          <p className="single-blog__date">{publishedAt}</p>
          <span>|</span>
          <p className="single-blog__category">{category}</p>
        </div>
        <div className="single-blog__likes-wrapper">
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
          >
            Tweet
          </a>
        </div>
      </header>
      <main className="single-blog__main">
        <BlockContent
          blocks={description}
          className="block-content"
          renderContainerOnSingleChild
        />
        <div className="single-blog__image-wrapper">
          <Image fluid={thumbnail} alt={`main photo of ${title}`} />
          {subImages?.map((img: any, i: number) => (
            <Image key={i} fluid={img.asset.fluid} alt={title} />
          ))}
        </div>
      </main>
    </article>
  )
}

export default SingleBlog
