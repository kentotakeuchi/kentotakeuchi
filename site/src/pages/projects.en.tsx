import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'
import '../styles/pages/projects.scss'
import SEO from '../components/shared/seo'
import shuffleText from '../utils/suffle-text'
import { SanityProjectGroupConnection } from '../../types/graphql-types'

interface Props {
  data: {
    allSanityProject: SanityProjectGroupConnection
  }
}

const AllProjectsPage = ({ data }: Props) => {
  const projects = data.allSanityProject.edges

  const { i18n } = useLingui()
  const { locale } = i18n

  const newProjects = projects.map(({ node: p }) => {
    return {
      title: locale === 'en' ? p.title?.en : p.title?.ja,
      // TODO: ugly logic..
      // TODO: type.. temp solution
      tag: p.tags
        ? locale === 'en'
          ? p.tags[0]?.title?.en
          : p.tags[0]?.title?.ja
        : '',
      client: locale === 'en' ? p.client?.en : p.client?.ja,
      slug: p.slug?.current,
      date: `${new Date(p.publishedAt).getFullYear()}.${
        new Date(p.publishedAt).getMonth() + 1
      }`,
    }
  })

  useEffect(() => {
    const n = projects.length
    let ids = []
    for (let i = 0; i < n; i++) {
      ids.push(`date--${i}`)
      ids.push(`project--${i}`)
      ids.push(`client--${i}`)
      ids.push(`maintenance--${i}`)
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
          {newProjects.map((p, i) => (
            <li key={p.slug} className="projects-page__item">
              <span id={`date--${i}`}>{p.date}</span>
              <Link to={`./${p.slug}`}>
                <p id={`project--${i}`}>{p.title}</p>
              </Link>
              {
                p.client && (
                  <span id={`client--${i}`}>{i18n._(t`client work`)}</span>
                ) /** client work */
              }
              {(p.tag === 'maintenance' || p.tag === 'メンテナンス中') && (
                <span id={`maintenance--${i}`}>{p.tag}</span> /** maintenance */
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
