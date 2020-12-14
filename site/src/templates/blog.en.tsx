import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'
import '../styles/pages/blog.scss'
import SEO from '../components/shared/seo'
import SingleBlog from '../components/blog/single-blog/single-blog'
import PrevNextPagination from '../components/shared/navigation/prev-next-pagination/prev-next-pagination'
import RelatedItems from '../components/shared/ui-elements/related-items/related-items'
import Card from '../components/shared/ui-elements/card/card'
import shuffleArray from '../utils/suffle-array'

export default ({ data, ...props }: any) => {
  console.log({ data, props })
  const blog = data.sanityBlog // selected blog
  const blogs = data.allSanityBlog.edges // all blog

  const { i18n } = useLingui()
  const { locale } = i18n

  // For legible code
  const newBlog = {
    title: locale === 'en' ? blog.title.en : blog.title.ja,
    slug: blog.slug.current,
    date:
      locale === 'en'
        ? new Date(blog.publishedAt).toLocaleDateString('en-US')
        : new Date(blog.publishedAt).toLocaleDateString('ja-JP'),
    category: locale === 'en' ? blog.category.title.en : blog.category.title.ja,
    description:
      locale === 'en' ? blog.description._rawEn : blog.description._rawJa,
    thumbnail: blog.thumbnail.asset.fluid,
    subImages: blog.subImages,
    likes: blog.likes,
    id: blog._id,
  }

  // For legible code
  const newBlogs = blogs.map(({ node: blog }: any) => {
    return {
      title: locale === 'en' ? blog.title.en : blog.title.ja,
      slug: blog.slug.current,
      date:
        locale === 'en'
          ? new Date(blog.publishedAt).toLocaleDateString('en-US')
          : new Date(blog.publishedAt).toLocaleDateString('ja-JP'),
      thumbnail: blog.thumbnail.asset.fluid,
      category:
        locale === 'en' ? blog.category.title.en : blog.category.title.ja,
      likes: blog.likes,
      id: blog._id,
    }
  })

  // To get a current "prefix" of url
  const { pathname } = props.location
  const temp = pathname.split('/')
  temp.pop()
  const prefix = temp.join('/') // ex: "/ja/blog"

  // Filtered by "the same category" "excluding current blog"
  const filteredBlogs = newBlogs.filter(
    (nb: any) => nb.category === newBlog.category && nb.slug !== newBlog.slug
  )

  // Shuffle related items
  useEffect(() => {
    shuffleArray(filteredBlogs)
  }, [])

  return (
    <>
      <SEO title={newBlog.title} lang={locale} />
      <div className="blog-page">
        <SingleBlog blog={newBlog} url={props.location.href} />
        <PrevNextPagination
          items={newBlogs}
          curSlug={newBlog.slug}
          prefix={prefix}
        />
        <RelatedItems title={i18n._(t`related articles`)}>
          {filteredBlogs.length > 0 ? (
            filteredBlogs
              .slice(0, 3)
              .map((blog: any, i: number) => (
                <Card key={i} item={blog} place="blog-page" />
              ))
          ) : (
            <p>{i18n._(t`No item found..`)}</p>
          )}
        </RelatedItems>
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String) {
    sanityBlog(slug: { current: { eq: $slug } }) {
      title {
        en
        ja
      }
      description {
        _rawEn
        _rawJa
      }
      slug {
        current
      }
      publishedAt
      thumbnail {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      subImages {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      category {
        title {
          ja
          en
        }
      }
      likes
      _id
    }

    allSanityBlog(
      filter: { active: { eq: true } }
      sort: { fields: [publishedAt], order: DESC }
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
