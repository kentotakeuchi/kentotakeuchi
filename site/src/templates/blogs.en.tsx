import React from 'react'
import { graphql } from 'gatsby'
import '../styles/pages/blogs.scss'
import SEO from '../components/shared/seo'
import Pagination from '../components/shared/navigation/pagination/pagination'
import Card from '../components/shared/ui-elements/card/card'

const BlogsPage = ({ data, pageContext }: any) => {
  const { language } = pageContext
  const blogs = data.allSanityBlog.edges

  return (
    <>
      <SEO title={language === 'en' ? 'Blog' : 'ブログ'} lang={language} />
      <div className="blogs-page">
        <ul className="blogs-page__list">
          {blogs.map(({ node: b }: any, i: number) => {
            const newBlog = {
              title: language === 'en' ? b.title.en : b.title.ja,
              slug: b.slug.current,
              date:
                language === 'en'
                  ? new Date(b.publishedAt).toLocaleDateString('en-US')
                  : new Date(b.publishedAt).toLocaleDateString('ja-JP'),
              thumbnail: b.thumbnail.asset.fluid,
              category:
                language === 'en' ? b.category.title.en : b.category.title.ja,
              likes: b.likes,
              id: b._id,
            }

            return <Card key={i} item={newBlog} place="blogs-page" />
          })}
        </ul>
        <Pagination context={pageContext} />
      </div>
    </>
  )
}

export default BlogsPage

export const pageQuery = graphql`
  query($skip: Int! = 0, $limit: Int! = 3) {
    allSanityBlog(
      filter: { active: { eq: true } }
      sort: { fields: [publishedAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title {
            en
            ja
          }
          category {
            title {
              en
              ja
            }
          }
          publishedAt
          slug {
            current
          }
          thumbnail {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          likes
          _id
        }
      }
    }
  }
`
