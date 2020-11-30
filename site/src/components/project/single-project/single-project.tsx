import React from 'react'
import Image from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'
import './single-project.scss'
// import { ProjectProps } from '../../../types/types'
import Icon from '../../shared/ui-elements/icon/icon'
import Video from '../../shared/ui-elements/video/video'

const SingleProject = ({ project }: any) => {
  console.log({ project })

  const { i18n } = useLingui()

  const {
    title,
    date,
    tags,
    client,
    tools,
    url,
    videoUrl,
    description,
    images,
  } = project

  return (
    <section className="single-project">
      <header className="single-project__header">
        <h1>{title}</h1>
        <div className="single-project__meta-wrapper">
          <p>{date}</p>
          <span>|</span>
          {tags.length > 0 && (
            <p className="single-project__tag">
              {tags.map((tag: string, i: number) => (
                <span key={i}>{tag}</span>
              ))}
            </p>
          )}
        </div>
        <div className="single-project__info-wrapper">
          {client && <p>{`${i18n._(t`client`)}: ${client}`}</p>}
          {tools.length > 0 && (
            <p>{`${i18n._(t`tools`)}: ${tools.map(
              (tool: string) => ` ${tool}`
            )}`}</p>
          )}
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Icon
              width={30}
              height={30}
              id="icon-link"
              color="rgb(245, 245, 245)"
            />
          </a>
        </div>
      </header>
      <main className="single-project__main">
        <Video src={videoUrl} autoPlay loop />
        <BlockContent
          blocks={description}
          className="block-content"
          renderContainerOnSingleChild
        />
        <div className="single-project__image-wrapper">
          {images.map((img: any, i: number) => (
            <Image key={i} fluid={img.asset.fluid} alt={`${title}`} />
          ))}
        </div>
      </main>
    </section>
  )
}

export default SingleProject
