import React from 'react'
import { graphql } from 'gatsby'
import '../styles/pages/project.scss'
import SEO from '../components/shared/seo'
import SingleProject from '../components/project/single-project/single-project'
import { SanityProject } from '../../types/graphql-types'
import { TemplatePageContextProps } from '../types/types'

interface Props {
  data: {
    sanityProject: SanityProject
  }
  pageContext: TemplatePageContextProps
}

const ProjectPage = ({ data, pageContext }: Props) => {
  console.log({ data })
  const project = data.sanityProject // selected project
  const { language } = pageContext

  // For legible code
  const newProject = {
    title: language === 'en' ? project.title?.en : project.title?.ja,
    publishedAt: `${new Date(project.publishedAt).getFullYear()}.${
      new Date(project.publishedAt).getMonth() + 1
    }`,
    tags: project.tags?.map(tag => {
      return language === 'en' ? tag?.title?.en : tag?.title?.ja
    }),
    client: language === 'en' ? project.client?.en : project.client?.ja,
    tools: project.tools,
    url: project.url,
    videoUrl: project.videoUrl,
    description:
      language === 'en'
        ? project.description?._rawEn
        : project.description?._rawJa,
    images: project.images,
    slug: project.slug?.current,
  }

  return (
    <>
      <SEO title={newProject.title} lang={language} />
      <div className="project-page">
        <SingleProject project={newProject} />
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title {
        en
        ja
      }
      description {
        _rawEn
        _rawJa
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
      tools
      slug {
        current
      }
      url
      videoUrl
      images {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      publishedAt
    }
  }
`

export default ProjectPage
