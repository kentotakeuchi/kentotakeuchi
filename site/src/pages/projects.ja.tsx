import React, { FunctionComponent, useEffect } from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { useLingui } from '@lingui/react'
import '../styles/pages/projects.scss'
import SEO from '../components/shared/seo'
import shuffleText from '../utils/suffle-text'

// TODO: type..
const AllProjectsPage: FunctionComponent<PageProps> = ({ data }: any) => {
  const projects = data.allSanityProject.edges

  const { i18n } = useLingui()
  const { locale } = i18n

  const newProjects = projects.map(({ node: p }: any) => {
    return {
      title: locale === 'en' ? p.title.en : p.title.ja,
      tag: locale === 'en' ? p.tags[0]?.title.en : p.tags[0]?.title.ja, // TODO: ugly logic..
      client: locale === 'en' ? p.client?.en : p.client?.ja,
      slug: p.slug.current,
      date: `${new Date(p.publishedAt).getFullYear()}.${new Date(
        p.publishedAt
      ).getMonth()}`,
    }
  })

  useEffect(() => {
    const n = projects.length
    let ids = []
    for (let i = 0; i < n; i++) {
      ids.push(`project--${i}`)
    }

    console.log({ ids })

    ids.forEach(id => {
      shuffleText(id)
    })
  }, [])

  return (
    <>
      <SEO
        title={locale === 'en' ? 'All Projects' : '全てのプロジェクト'}
        lang={locale}
      />
      <div className="projects-page">
        <ul className="projects-page__list">
          {newProjects.map((p: any, i: number) => (
            <li key={p.slug} className="projects-page__item">
              <span>{p.date}</span>
              <Link to={`./${p.slug}`}>
                <p id={`project--${i}`}>{p.title}</p>
              </Link>
              {
                p.client && (
                  <span>{i18n._('client work')}</span>
                ) /** client work */
              }
              {(p.tag === 'maintenance' || p.tag === 'メンテナンス中') && (
                <span>{p.tag}</span> /** maintenance */
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AllProjectsPage

export const pageQuery = graphql`
  query {
    allSanityProject(
      filter: { active: { eq: true } }
      sort: { fields: [publishedAt], order: DESC }
    ) {
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
