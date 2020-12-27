import GatsbyImage from 'gatsby-image'
import React from 'react'

export interface FluidImage {
  // __typename: 'ImageSharpFluid'
  aspectRatio: number | null
  base64: string | null
  sizes: string | null
  src: string | null
  srcSet: string | null
}

interface Props {
  className?: string
  alt?: string
  fluid?: FluidImage | null
}

export const GatsbyImageWrapper: React.FC<Props> = ({
  className,
  alt,
  fluid: f,
}) =>
  f != null ? (
    <GatsbyImage
      className={className}
      alt={alt}
      fluid={{
        aspectRatio: f.aspectRatio !== null ? f.aspectRatio : 1,
        base64: f.base64 !== null ? f.base64 : '',
        sizes: f.sizes !== null ? f.sizes : '',
        src: f.src !== null ? f.src : '',
        srcSet: f.srcSet !== null ? f.srcSet : '',
      }}
    />
  ) : null
