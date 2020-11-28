module.exports = {
  siteMetadata: {
    titleEn: `Kento Takeuchi`,
    titleJa: `竹内健人`,
    descEn: `The portfolio site of Kento Taekuchi`,
    descJa: `竹内健人ポートフォリオサイト`,
    authorEn: `Kento Takeuchi`,
    authorJa: `竹内健人`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // The plugin creates File nodes from files. The various “transformer” plugins can transform File nodes into various other types of data e.g. gatsby-transformer-json transforms JSON files into JSON data nodes.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/asset/images`,
      },
    },
    // gatsby-transformer-remark transforms markdown files into MarkdownRemark nodes from which you can query an HTML representation of the markdown
    {
      resolve: `gatsby-transformer-remark`,
    },
    // OPTIMIZE IMAGES
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // This (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The official portfolio website of Kento Takeuchi`,
        short_name: `Portfolio`,
        description: `Welcome to the official portfolio website of Kento Takeuchi`,
        start_url: `/`,
        lang: `en`,
        background_color: `rgb(0, 0, 0)`,
        theme_color: `rgb(255, 255, 255)`,
        display: `minimal-ui`,
        include_favicon: false, // This will exclude favicon link tag
        icon: `src/asset/images/apple.png`,
        icons: [
          {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
        ],
        localize: [
          {
            name: `竹内健人ポートフォリオウェブサイト`,
            short_name: `ポートフォリオ`,
            description: `竹内健人ポートフォリオウェブサイトへようこそ`,
            start_url: `/ja/`,
            lang: `ja`,
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: `production`,
        overlayDrafts: true,
        watchMode: true,
        token: process.env.SANITY_WATCH_MODE_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: `ja`,
        useLangKeyLayout: false,
        prefixDefault: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
