import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import './nav-links.scss'
import shuffleText from '../../../../utils/suffle-text'

// DATA
const HEADER_LINK_LIST = [
  { name: t`all projects`, slug: 'projects' },
  { name: t`profile`, slug: 'profile' },
  { name: t`contact`, slug: 'contact' },
  { name: t`blog`, slug: 'blog' },
]

const SIDE_DRAWER_LINK_LIST = [
  { name: t`all projects`, slug: 'projects' },
  { name: t`profile`, slug: 'profile' },
  { name: t`contact`, slug: 'contact' },
  { name: t`blog`, slug: 'blog' },
]

// const FOOTER_LINK_LIST = []

interface Props {
  place: string
}

const NavLinks = ({ place }: Props) => {
  const { i18n } = useLingui()
  const { locale } = i18n
  console.log({ i18n, locale })

  useEffect(() => {
    const n = HEADER_LINK_LIST.length
    let ids = []
    for (let i = 0; i < n; i++) {
      ids.push(`header--${i}`)
      ids.push(`side-drawer--${i}`)
    }

    ids.forEach(id => {
      shuffleText(id)
    })
  }, [])

  let navLinksJSX
  switch (place) {
    case 'header':
      navLinksJSX = HEADER_LINK_LIST.map(({ name, slug }, i) => (
        <li key={slug}>
          <Link to={`/${locale}/${slug}`} id={`header--${i}`}>
            {i18n._(name)}
          </Link>
        </li>
      ))
      break
    case 'side-drawer':
      navLinksJSX = SIDE_DRAWER_LINK_LIST.map(({ name, slug }, i) => (
        <li key={slug}>
          <Link to={`/${locale}/${slug}`} id={`side-drawer--${i}`}>
            {i18n._(name)}
          </Link>
        </li>
      ))
      break
    case 'footer':
      // navLinksJSX = FOOTER_LINK_LIST.map(({ name, slug }) => (
      //   <li key={slug}>
      //     <Link
      //       to={`/${locale}/${slug}`}
      //       activeClassName="nav-links__link--active"
      //     >
      //       <Trans id={name} />
      //     </Link>
      //   </li>
      // ))
      break
    default:
      navLinksJSX = null
      break
  }

  return <ul className={`nav-links nav-links--${place}`}>{navLinksJSX}</ul>
}

export default NavLinks
