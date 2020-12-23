const withDefaults = require('./utils/default-options');

module.exports = (themeOptions) => {
  console.log({ themeOptions });

  const options = withDefaults(themeOptions);
  console.log({ options });

  return {
    pathPrefix: options.basePath,
    plugins: [],
  };
};
