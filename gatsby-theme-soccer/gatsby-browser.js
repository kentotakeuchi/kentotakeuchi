// import React from 'react';
// import Layout from './src/components/layout';

export const onClientEntry = () => {
  console.log('on client entry from theme');
};

// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname from theme', location.pathname);
  console.log(
    'old pathname from theme',
    prevLocation ? prevLocation.pathname : null
  );
};

export const wrapPageElement = ({ element, props }) => {
  console.log({ element, props }, 'from theme');
  // return <Layout {...props}>{element}</Layout>;
};
