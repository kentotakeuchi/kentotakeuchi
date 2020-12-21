import { graphql, useStaticQuery } from 'gatsby'

const useLikesQuery = () => {
  // query "id" and "likes"
  const data = useStaticQuery(graphql`
    query {
      allSanityBlog(filter: { active: { eq: true } }) {
        edges {
          node {
            _id
            likes
          }
        }
      }
    }
  `)

  // formatted query data into { id: likes }
  const likesObj: any = {}
  data.allSanityBlog.edges.forEach(({ node: blog }: any): void => {
    likesObj[blog._id] = blog.likes
  })

  return likesObj
}

export default useLikesQuery
