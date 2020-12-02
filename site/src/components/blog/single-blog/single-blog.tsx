import React from 'react'
import Image from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'
import './single-blog.scss'

const SingleBlog = ({ blog }: any) => {
  const { title, description, date, thumbnail, subImages, category } = blog

  return (
    <article className="single-blog">
      <header className="single-blog__header">
        <h1>{title}</h1>
        <div className="single-blog__meta-wrapper">
          <p className="single-blog__date">{date}</p>
          <span>|</span>
          <p className="single-blog__category">{category}</p>
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
