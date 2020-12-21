import React from 'react'
import Image from 'gatsby-image'
import './avatar.scss'

const Avatar = ({ src, alt, width, height }) => {
  return (
    <Image
      fluid={src}
      alt={alt}
      style={{ width: width, height: height, borderRadius: '10rem' }}
    />
  )
}

export default Avatar
