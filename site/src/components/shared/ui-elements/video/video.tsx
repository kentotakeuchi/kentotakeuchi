import React from 'react'
import './video.scss'

interface Props {
  width?: number
  height?: number
  controls?: boolean
  autoPlay?: boolean
  loop?: boolean
  className?: string
  src: string
  type?: string
}

const Video = ({
  width,
  height,
  controls,
  autoPlay,
  loop,
  className,
  src,
  type,
}: Props) => (
  <video
    className="video"
    width={width}
    height={height}
    controls={controls}
    autoPlay={autoPlay}
    loop={loop}
    muted
  >
    <source
      className={`video__source ${className && className}`}
      src={src}
      type={type}
    />
    Sorry, your browser doesn't support embedded videos.
  </video>
)

export default Video
