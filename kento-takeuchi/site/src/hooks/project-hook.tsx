// import { graphql, useStaticQuery } from 'gatsby'

// const useProject = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allSanityProject(filter: { active: { eq: true } }) {
//         edges {
//           node {
//             title {
//               en
//               ja
//             }
//             description {
//               _rawEn
//               _rawJa
//             }
//             tags {
//               title {
//                 en
//                 ja
//               }
//             }
//             client {
//               en
//               ja
//             }
//             tools
//             slug {
//               current
//             }
//             url
//             videoUrl
//             images {
//               asset {
//                 fluid {
//                   ...GatsbySanityImageFluid
//                 }
//               }
//             }
//             publishedAt
//           }
//         }
//       }
//     }
//   `)

//   const data2 = useStaticQuery(graphql`
//     query($slug: String) {
//       allSanityProject(slug: { current: { eq: $slug } }) {
//         edges {
//           node {
//             title {
//               en
//               ja
//             }
//             description {
//               _rawEn
//               _rawJa
//             }
//             tags {
//               title {
//                 en
//                 ja
//               }
//             }
//             client {
//               en
//               ja
//             }
//             tools
//             slug {
//               current
//             }
//             url
//             videoUrl
//             images {
//               asset {
//                 fluid {
//                   src
//                 }
//               }
//             }
//             publishedAt
//           }
//         }
//       }
//     }
//   `)

//   return data.allSanityBlog.edges
// }

// export default useProject
