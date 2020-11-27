import React, { FunctionComponent } from 'react'
import { graphql, PageProps } from 'gatsby'
import { useLingui } from '@lingui/react'
import '../styles/pages/projects.scss'
// import SEO from '../components/shared/seo'

// TODO: type..
const AllProjectsPage: FunctionComponent<PageProps> = ({ data }: any) => {
  const projects = data.allSanityProject.edges

  const { i18n } = useLingui()
  const { locale } = i18n

  const newProjects = projects.map(({ node: p }: any) => {
    return {
      title: locale === 'en' ? p.title.en : p.title.ja,
      tags: p.tags,
      client: locale === 'en' ? p.client?.en : p.client?.ja,
      slug: p.slug.current,
      date:
        locale === 'en'
          ? new Date(p.publishedAt).toLocaleDateString('en-US')
          : new Date(p.publishedAt).toLocaleDateString('ja-JP'),
    }
  })

  return (
    <>
      {/* <SEO
        title={locale === 'en' ? 'All Projects' : '全てのプロジェクト'}
        lang={locale}
      /> */}
      <div className="projects-page">
        <ul className="projects-page__list">
          {newProjects.map((p: any) => (
            <li key={p.slug}>{p.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AllProjectsPage

export const pageQuery = graphql`
  query {
    allSanityProject(filter: { active: { eq: true } }) {
      edges {
        node {
          title {
            en
            ja
          }
          tags {
            title {
              en
              ja
            }
          }
          client {
            en
            ja
          }
          slug {
            current
          }
          publishedAt
        }
      }
    }
  }
`
