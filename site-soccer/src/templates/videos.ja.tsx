import React from 'react'
import { graphql } from 'gatsby'
import './videos.scss'
import SEO from '../components/seo'
// import Pagination from '../components/shared/navigation/pagination/pagination'
// import Card from '../components/shared/ui-elements/card/card'

const VideosPage: React.FC<any> = ({ data, pageContext }) => {
  const { language } = pageContext
  const videos = data.allYoutubeVideo.edges

  console.log({ videos })

  return (
    <>
      <SEO title={language === 'en' ? 'Videos' : '動画'} lang={language} />
      <div className="videos-page"></div>
    </>
  )
}

export default VideosPage

export const pageQuery = graphql`
  query {
    allYoutubeVideo {
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
