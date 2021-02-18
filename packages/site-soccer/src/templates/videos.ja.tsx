import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { t } from '@lingui/macro'
import './videos.scss'
import SEO from '../components/seo'
import Pagination from '../components/shared/navigation/pagination/pagination'
import Card from '../components/shared/ui-elements/card/card'
import { getAllLocaleUtils } from '../hooks/i18n-hook'
import { Query } from '../../types/graphql-types'
import { PageContextType } from '../../types/custom-types'

const VideosPage: React.FC<PageProps<Query, PageContextType>> = ({
  data,
  pageContext,
}) => {
  const videos = data.allYoutubeVideo.edges

  const { i18n, locale } = getAllLocaleUtils()

  return (
    <>
      <SEO title={i18n._(t`Contact`)} lang={locale} />
      <div className="videos-page">
        <ul className="videos-page__video-list">
          {videos.map(({ node: v }) => (
            <li key={v.id}>
              <Card item={v} place="videos-page" />
            </li>
          ))}
        </ul>
        <Pagination context={pageContext} />
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
