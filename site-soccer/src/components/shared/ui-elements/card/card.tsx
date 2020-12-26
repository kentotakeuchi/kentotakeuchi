import React, { useEffect } from 'react'
// import { Link } from 'gatsby'
// import Image from 'gatsby-image'
import YouTube, { Options } from 'react-youtube'
import './card.scss'
// import Icon from '../icon/icon'
import { getAllLocaleUtils } from '../../../../hooks/i18n-hook'
import { YoutubeVideo } from '../../../../../types/graphql-types'

interface Props {
  item: YoutubeVideo
  place?: string
}

const Card = ({ item, place }: Props) => {
  console.log({ item, place })

  const { i18n, locale } = getAllLocaleUtils()

  const { videoId, title, localThumbnail, publishedAt } = item

  if (!videoId || !title) {
    throw Error('Not found videoId or title')
  }

  const options: Options = {
    playerVars: {
      controls: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      showinfo: 0,
    },
  }

  useEffect(() => {}, [])

  // TODO: use thumbnail to prevent style from collapsing before loading youtube
  return (
    <div className="card">
      <YouTube videoId={videoId} className="card__youtube" opts={options} />
      <h3>{i18n._(title)}</h3>
    </div>
  )
}

export default Card
