import { graphql, useStaticQuery } from 'gatsby'

//
const useImage = () => {
  const data = useStaticQuery(graphql`
    query {
      meImg: allFile(filter: { relativePath: { eq: "me.jpg" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const me = data.meImg.edges[0].node.childImageSharp.fluid

  return {
    me,
  }
}

export default useImage
