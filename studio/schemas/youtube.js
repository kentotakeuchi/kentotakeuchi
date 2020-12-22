import React from 'react';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

const Preview = ({ value }) => {
  const { url } = value;
  const id = getYouTubeId(url);
  return <YouTube videoId={id} />;
};

export default {
  name: 'youtube',
  title: 'YouTube Embed',
  type: 'object',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: Preview,
  },
};
