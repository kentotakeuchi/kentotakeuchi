import React from 'react'
import { graphql } from 'gatsby'
import './videos.scss'
import SEO from '../components/seo'
import Pagination from '../components/shared/navigation/pagination/pagination'
import Card from '../components/shared/ui-elements/card/card'
import { YoutubeVideoEdge } from '../../types/graphql-types'

// TODO:
interface Props {
  data: any
  pageContext: {
    language: string
  }
}

const VideosPage: React.FC<Props> = ({ data, pageContext }) => {
  const { language } = pageContext
  const videos = data.allYoutubeVideo.edges

  console.log({ videos })

  return (
    <>
      <SEO title={language === 'en' ? 'Videos' : '動画'} lang={language} />
      <div className="videos-page">
        <ul className="videos-page__video-list">
          {videos.map(({ node: v }: YoutubeVideoEdge) => (
            <li key={v.id}>
              <Card item={v} place="videos-page" />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default VideosPage

export const pageQuery = graphql`
  query {
    allYoutubeVideo(
      filter: { privacyStatus: { eq: "public" } }
      sort: { fields: [publishedAt], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          title
          description
          videoId
          publishedAt
          privacyStatus
          localThumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
