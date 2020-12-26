const path = require('path')
// // // const { createFilePath } = require('gatsby-source-filesystem')

// const createSinglePage = async (
//   { graphql, actions, reporter },
//   language,
//   collection
// ) => {
//   const { createPage } = actions

//   const { errors, data } = await graphql(
//     `
//       {
//         ${collection}: allSanity${
//       collection.charAt(0).toUpperCase() + collection.slice(1)
//     } {
//           edges {
//             node {
//               slug {
//                 current
//               }
//             }
//           }
//         }
//       }
//     `
//   )

//   if (errors) {
//     reporter.panic('Error loading blog', JSON.stringify(errors))
//   }

//   let items, basePath
//   switch (collection) {
//     case 'project':
//       items = data.project.edges.map(({ node }) => node)
//       basePath = `/${language}`
//       break
//     case 'blog':
//       items = data.blog.edges.map(({ node }) => node)
//       basePath = `/${language}/${collection}`
//       break
//     default:
//       break
//   }

//   if (!items) {
//     console.log('No collection found.')
//   }

//   items.forEach(item => {
//     createPage({
//       path: `${basePath}/${item.slug.current}`,
//       component: path.resolve(`./src/templates/${collection}.${language}.tsx`),
//       context: {
//         slug: item.slug.current,
//         collection,
//         language,
//       },
//     })
//   })
// }

// create pages with pagination
const paginate = async ({
  graphql,
  actions,
  reporter,
  collection,
  pathPrefix,
  component,
  language,
}) => {
  const { createPage } = actions

  const { errors, data } = await graphql(
    `
    {
      ${collection} {
        totalCount
      }
    }
    `
  )

  if (errors) {
    reporter.panic(`Error loading ${collection}`, JSON.stringify(errors))
  }

  const { totalCount } = data[collection]

  const itemsPerPage = 9
  const totalPages = Math.ceil(totalCount / itemsPerPage)

  Array.from({ length: totalPages }).forEach((_, i) => {
    // for each page, use the createPages api to dynamically create that page
    createPage({
      path: `${pathPrefix}/${i + 1}`,
      path: i === 0 ? `${pathPrefix}/` : `${pathPrefix}/${i + 1}`,
      component,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        totalPages,
        currentPage: i + 1,
        pathPrefix,
        language,
      },
    })
  })
}

// // Tell plugins to add pages. This extension point is called only after the initial sourcing and transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.
exports.createPages = async ({ graphql, actions, reporter }) => {
  await Promise.all([
    // createSinglePage({ graphql, actions, reporter }, 'en', 'project'),
    // createSinglePage({ graphql, actions, reporter }, 'ja', 'project'),
    // createSinglePage({ graphql, actions, reporter }, 'en', 'blog'),
    // createSinglePage({ graphql, actions, reporter }, 'ja', 'blog'),
    paginate({
      graphql,
      actions,
      reporter,
      collection: 'allYoutubeVideo',
      pathPrefix: '/en/videos',
      component: path.resolve('./src/templates/videos.en.tsx'),
      language: 'en',
    }),
    paginate({
      graphql,
      actions,
      reporter,
      collection: 'allYoutubeVideo',
      pathPrefix: '/ja/videos',
      component: path.resolve('./src/templates/videos.ja.tsx'),
      language: 'ja',
    }),
  ])
}

// // // Called when a new page is created.
// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage } = actions

//   createPage({
//     ...page,
//     context: {
//       ...page.context,
//       memo: 'this comes from onCreatePage on gatsby-node.js',
//     },
//   })
// }

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    })
  }
}
