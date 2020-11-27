import React from 'react'
import './sns.scss'
import Icon from '../../ui-elements/icon/icon'

const SNS = ({ width, height, place }) => {
  let iconColor
  if (place === 'footer') iconColor = 'rgb(245, 245, 245)'
  else iconColor = 'rgb(0, 0, 0)'

  return (
    <ul className={`sns sns--${place}`}>
      <li>
        <a
          href="https://github.com/kentotakeuchi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            width={width}
            height={height}
            id="icon-github"
            color={iconColor}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/takeuchi-kento-101b3549/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            width={width}
            height={height}
            id="icon-linkedin"
            color={iconColor}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/mikiotanaka/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            width={width}
            height={height}
            id="icon-instagram"
            color={iconColor}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/mikio.tanaka.001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            width={width}
            height={height}
            id="icon-facebook"
            color={iconColor}
          />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/KentoTakeuchi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            width={width}
            height={height}
            id="icon-twitter"
            color={iconColor}
          />
        </a>
      </li>
    </ul>
  )
}

export default SNS
