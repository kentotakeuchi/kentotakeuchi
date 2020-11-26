// const path = require('path')
// // const { createFilePath } = require('gatsby-source-filesystem')

// const createSingleProductPage = async (
//   { graphql, actions, reporter },
//   language
// ) => {
//   const { createPage } = actions

//   const { errors, data } = await graphql(
//     `
//       {
//         product: allSanityProduct(
//           filter: { active: { eq: true }, currency: { eq: "jpy" } }
//           sort: { fields: [unit_amount] }
//           limit: 1000
//         ) {
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
//     reporter.panic('Error loading products', JSON.stringify(errors))
//   }

//   const products = data.product.edges.map(({ node }) => node)

//   products.forEach(product => {
//     createPage({
//       path: `/${language}/store/${product.slug.current}`,
//       component: path.resolve(`./src/templates/product.${language}.js`),
//       context: {
//         slug: product.slug.current,
//         collection: 'product',
//         language,
//       },
//     })
//   })
// }

// const createSingleBlogPage = async (
//   { graphql, actions, reporter },
//   language
// ) => {
//   const { createPage } = actions

//   const { errors, data } = await graphql(
//     `
//       {
//         blog: allSanityBlog {
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

//   const blogs = data.blog.edges.map(({ node }) => node)

//   blogs.forEach(blog => {
//     createPage({
//       path: `/${language}/blog/${blog.slug.current}`,
//       component: path.resolve(`./src/templates/blog.${language}.js`),
//       context: {
//         slug: blog.slug.current,
//         collection: 'blog',
//         language,
//       },
//     })
//   })
// }

// const createSingleNewsPage = async (
//   { graphql, actions, reporter },
//   language
// ) => {
//   const { createPage } = actions

//   const { errors, data } = await graphql(
//     `
//       {
//         news: allSanityNews {
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
//     reporter.panic('Error loading news', JSON.stringify(errors))
//   }

//   const newsList = data.news.edges.map(({ node }) => node)

//   newsList.forEach(news => {
//     createPage({
//       path: `/${language}/news/${news.slug.current}`,
//       component: path.resolve(`./src/templates/news.${language}.js`),
//       context: {
//         slug: news.slug.current,
//         collection: 'news',
//         language,
//       },
//     })
//   })
// }

// const paginate = async ({
//   graphql,
//   actions,
//   reporter,
//   collection,
//   pathPrefix,
//   component,
//   language,
// }) => {
//   const { createPage } = actions

//   const { errors, data } = await graphql(
//     `
//     {
//       ${collection} {
//         totalCount
//       }
//     }
//     `
//   )

//   if (errors) {
//     reporter.panic(`Error loading ${collection}`, JSON.stringify(errors))
//   }

//   const { totalCount } = data[collection]

//   const itemsPerPage = 3
//   const totalPages = Math.ceil(totalCount / itemsPerPage)

//   Array.from({ length: totalPages }).forEach((_, i) => {
//     // for each page, use the createPages api to dynamically create that page
//     createPage({
//       path: `${pathPrefix}/${i + 1}`,
//       path: i === 0 ? `${pathPrefix}` : `${pathPrefix}/${i + 1}`,
//       component,
//       context: {
//         limit: itemsPerPage,
//         skip: i * itemsPerPage,
//         totalPages,
//         currentPage: i + 1,
//         pathPrefix,
//         language,
//       },
//     })
//   })
// }

// // Tell plugins to add pages. This extension point is called only after the initial sourcing and transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   await Promise.all([
//     createSingleProductPage({ graphql, actions, reporter }, 'ja'),
//     createSingleProductPage({ graphql, actions, reporter }, 'en'),
//     createSingleBlogPage({ graphql, actions, reporter }, 'ja'),
//     createSingleBlogPage({ graphql, actions, reporter }, 'en'),
//     createSingleNewsPage({ graphql, actions, reporter }, 'ja'),
//     createSingleNewsPage({ graphql, actions, reporter }, 'en'),
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
//   ])
// }

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
