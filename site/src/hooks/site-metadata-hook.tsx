import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          titleJa
          titleEn
          descJa
          descEn
          authorJa
          authorEn
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
