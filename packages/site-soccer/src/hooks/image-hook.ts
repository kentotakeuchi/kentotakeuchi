import { graphql, useStaticQuery } from 'gatsby'

//
const useImage = () => {
  const data = useStaticQuery(graphql`
    query {
      meImage: allFile(filter: { relativePath: { eq: "me.jpg" } }) {
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
  console.log({ data })

  const me = data.meImage.edges[0].node.childImageSharp.fluid

  return {
    me,
  }
}

export default useImage
