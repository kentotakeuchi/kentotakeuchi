import React, { useEffect, useContext } from 'react'
import Image from 'gatsby-image'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import BlockContent from '@sanity/block-content-to-react'
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share'
import './single-blog.scss'
import Icon from '../../shared/ui-elements/icon/icon'
import likesContext from '../../../contexts/likes-context'

// TODO: type..
interface Props {
  blog: any
  url: string
}

const SingleBlog = ({ blog, url }: Props) => {
  // destructure selected blog
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

  // global context of likes
  const { allLikes, hasLikes, checkLikes, updateLikes } = useContext(
    likesContext
  )

  // check if the like has already been clicked or not
  useEffect(() => {
    checkLikes(id)
  }, [])

  const serializers = {
    types: {
      youtube: ({ node }: any) => {
        const { url } = node
        const youtubeId: any = getYouTubeId(url)
        return <YouTube videoId={youtubeId} className="single-blog__youtube" />
      },
    },
  }

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
          <TwitterShareButton
            title={title}
            url={url}
            via="KentoTakeuchi"
            related={['web', 'soccer']}
          >
            <TwitterIcon round size={30} />
          </TwitterShareButton>
          <FacebookShareButton url={url} quote={`${title} by Kento Takeuchi`}>
            <FacebookIcon round size={30} />
          </FacebookShareButton>
        </div>
      </header>
      <main className="single-blog__main">
        <BlockContent
          blocks={description}
          serializers={serializers}
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
