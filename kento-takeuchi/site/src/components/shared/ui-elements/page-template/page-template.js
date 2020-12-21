import React from 'react'
import Image from 'gatsby-image'
import './page-template.scss'

const PageTemplate = ({ item, children, style }) => {
  const { title, date, mainImage, subImages, category } = item

  return (
    <article className="page-template" style={style && style}>
      <header className="page-template__header">
        {category && <p>{category}</p>}
        <h1>{title}</h1>
        {date && <small>{date}</small>}
      </header>
      <main className="page-template__main">
        {/* Children should be "one" parent */}
        {children}
        {mainImage && (
          <div className="page-template__image-wrapper">
            <Image fluid={mainImage} alt={title} />
            {subImages &&
              subImages.map((img, i) => (
                <Image key={i} fluid={img.asset.fluid} alt={title} />
              ))}
          </div>
        )}
      </main>
    </article>
  )
}

export default PageTemplate
