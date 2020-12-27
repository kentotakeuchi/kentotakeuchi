import React from 'react'
import { withPrefix } from 'gatsby'
import './icon.scss'

interface Props {
  width?: number
  height?: number
  id: string
  color?: string
}

const Icon = ({ width, height, id, color }: Props) => {
  if (!color) color = 'rgb(245, 245, 245)'

  return (
    <svg width={width} height={height} style={{ fill: color }} className="icon">
      <use xlinkHref={withPrefix(`sprite.svg#${id}`)}></use>
    </svg>
  )
}

export default Icon
