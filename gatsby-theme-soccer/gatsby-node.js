// const path = require(`path`);
const withDefaults = require(`./utils/default-options`);

const homeTemplate = require.resolve(`./src/templates/home.tsx`)

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions;
  const { basePath } = withDefaults(themeOptions);

  createPage({
    path: basePath,
    component: homeTemplate,
    context: {
      memo: 'hello from theme',
    },
  });
};
