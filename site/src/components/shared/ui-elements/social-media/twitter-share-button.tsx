import React from 'react'

const TwitterShareButton = ({ item, url }: any) => {
  const { title } = item

  return (
    <>
      <a
        className="twitter-share-button"
        href={`https://twitter.com/intent/tweet`}
        target="_blank"
        rel="noopener noreferrer"
        data-size="large"
        data-text={title}
        data-url={url}
        data-via="KentoTakeuchi"
        data-related="web,soccer"
      >
        Tweet
      </a>
    </>
  )
}

export default TwitterShareButton
