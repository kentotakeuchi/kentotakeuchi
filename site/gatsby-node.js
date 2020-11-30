const path = require('path')
// // const { createFilePath } = require('gatsby-source-filesystem')

const createSinglePage = async (
  { graphql, actions, reporter },
  language,
  collection
) => {
  const { createPage } = actions

  const { errors, data } = await graphql(
    `
      {
        ${collection}: allSanity${
      collection.charAt(0).toUpperCase() + collection.slice(1)
    } {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
      }
    `
  )

  if (errors) {
    reporter.panic('Error loading blog', JSON.stringify(errors))
  }

  let items
  switch (collection) {
    case 'project':
      items = data.project.edges.map(({ node }) => node)
      break
    case 'blog':
      items = data.blog.edges.map(({ node }) => node)
      break
    default:
      break
  }

  if (!items) {
    console.log('No collection found.')
  }

  items.forEach(item => {
    createPage({
      path: `/${language}/${collection + 's'}/${item.slug.current}`,
      component: path.resolve(`./src/templates/${collection}.${language}.tsx`),
      context: {
        slug: item.slug.current,
        collection,
        language,
      },
    })
  })
}

//
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

  const itemsPerPage = 3
  const totalPages = Math.ceil(totalCount / itemsPerPage)

  Array.from({ length: totalPages }).forEach((_, i) => {
    // for each page, use the createPages api to dynamically create that page
    createPage({
      path: `${pathPrefix}/${i + 1}`,
      path: i === 0 ? `${pathPrefix}` : `${pathPrefix}/${i + 1}`,
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
    createSinglePage({ graphql, actions, reporter }, 'en', 'project'),
    createSinglePage({ graphql, actions, reporter }, 'ja', 'project'),
    // createSinglePage({ graphql, actions, reporter }, 'en', 'blog'),
    // createSinglePage({ graphql, actions, reporter }, 'ja', 'blog'),
    //     paginate({
    //       graphql,
    //       actions,
    //       reporter,
    //       collection: 'allSanityProduct',
    //       pathPrefix: '/ja/store',
    //       component: path.resolve('./src/templates/store.ja.js'),
    //       language: 'ja',
    //     }),
    //     paginate({
    //       graphql,
    //       actions,
    //       reporter,
    //       collection: 'allSanityProduct',
    //       pathPrefix: '/en/store',
    //       component: path.resolve('./src/templates/store.en.js'),
    //       language: 'en',
    //     }),
    //     paginate({
    //       graphql,
    //       actions,
    //       reporter,
    //       collection: 'allSanityBlog',
    //       pathPrefix: '/ja/blog',
    //       component: path.resolve('./src/templates/blog-list.ja.js'),
    //       language: 'ja',
    //     }),
    //     paginate({
    //       graphql,
    //       actions,
    //       reporter,
    //       collection: 'allSanityBlog',
    //       pathPrefix: '/en/blog',
    //       component: path.resolve('./src/templates/blog-list.en.js'),
    //       language: 'en',
    //     }),
    //     paginate({
    //       graphql,
    //       actions,
    //       reporter,
    //       collection: 'allSanityNews',
    //       pathPrefix: '/ja/news',
    //       component: path.resolve('./src/templates/news-list.ja.js'),
    //       language: 'ja',
    //     }),
    //     paginate({
    //       graphql,
    //       actions,
    //       reporter,
    //       collection: 'allSanityNews',
    //       pathPrefix: '/en/news',
    //       component: path.resolve('./src/templates/news-list.en.js'),
    //       language: 'en',
    //     }),
  ])
}

// // Called when a new page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  createPage({
    ...page,
    context: {
      ...page.context,
      memo: 'this comes from onCreatePage on gatsby-node.js',
    },
  })
}
// {
//   page: {
//     internalComponentName: 'ComponentJa',
//     path: '/ja/',
//     matchPath: undefined,
//     component: '/Users/takeuchitaketo/github/sudo-shoten/site/src/pages/index.ja.js',
//     componentChunkName: 'component---src-pages-index-ja-js',
//     isCreatedByStatefulCreatePages: true,
//     context: { slug: '/ja/', langKey: 'ja' },
//     updatedAt: 1604560381456,
//     pluginCreator___NODE: 'ab64e6a5-1c22-5182-b4b1-60a796e674f8',
//     pluginCreatorId: 'ab64e6a5-1c22-5182-b4b1-60a796e674f8',
//     componentPath: '/Users/takeuchitaketo/github/sudo-shoten/site/src/pages/index.ja.js'
//   }
// }
