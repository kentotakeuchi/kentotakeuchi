import React from 'react'
import { Link } from 'gatsby'
import './language.scss'

// TODO: wip
// path.replace('en', 'ja') is good approach?
const Language = ({ place, path }) => {
  return (
    <ul className={`language language--${place}`}>
      {path.startsWith('/en') && (
        <Link to={path.replace('en', 'ja')}>
          <li>
            <span role="img" aria-label="emoji">
              🇯🇵
            </span>
          </li>
        </Link>
      )}
      {path.startsWith('/ja') && (
        <Link to={path.replace('ja', 'en')}>
          <li>
            <span role="img" aria-label="emoji">
              🇺🇸
            </span>
          </li>
        </Link>
      )}
    </ul>
  )
}

export default Language
