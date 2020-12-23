const HeadComponents = [];

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {};

export const wrapPageElement = ({ element, props }) => {
  console.log({ element, props });
};
