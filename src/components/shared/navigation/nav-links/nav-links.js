import React from 'react'
import { Link } from 'gatsby'
import { Trans } from '@lingui/macro'
import { i18nMark } from '@lingui/react'
import './nav-links.scss'
import Button from '../../form-elements/button/button'

// DATA
const HEADER_LINK_LIST = [{ name: i18nMark('オンラインストア'), slug: 'store' }]

const SIDE_DRAWER_LINK_LIST = [
  { name: i18nMark('オンラインストア'), slug: 'store' },
  { name: i18nMark('須藤商店について'), slug: 'about' },
  { name: i18nMark('お問い合わせ'), slug: 'contact' },
  { name: i18nMark('お知らせ'), slug: 'news' },
  { name: i18nMark('ブログ'), slug: 'blog' },
]

const FOOTER_LINK_LIST = [
  { name: i18nMark('オンラインストア'), slug: 'store' },
  { name: i18nMark('須藤商店について'), slug: 'about' },
  { name: i18nMark('お問い合わせ'), slug: 'contact' },
  { name: i18nMark('お知らせ'), slug: 'news' },
  { name: i18nMark('ブログ'), slug: 'blog' },
  { name: i18nMark('配送について'), slug: 'shipping-info' },
  { name: i18nMark('返品と交換について'), slug: 'return-and-exchange' },
  { name: i18nMark('プライバシーポリシー'), slug: 'privacy-policy' },
  { name: i18nMark('利用規約'), slug: 'terms-and-conditions' },
]

const NavLinks = ({ place, currentLanguage }) => {
  let navLinksJSX
  switch (place) {
    case 'header':
      navLinksJSX = HEADER_LINK_LIST.map(({ name, slug }) => (
        <li key={slug}>
          <Button to={`/${currentLanguage}/${slug}`}>
            <Trans id={name} />
          </Button>
        </li>
      ))
      break
    case 'side-drawer':
      navLinksJSX = SIDE_DRAWER_LINK_LIST.map(({ name, slug }) => (
        <li key={slug}>
          <Link
            to={`/${currentLanguage}/${slug}`}
            activeClassName="nav-links__link--active"
          >
            <p
              className={`waku-text ${
                currentLanguage === 'en' && 'nav-links--side-drawer__text--en'
              }`}
            >
              <Trans id={name} />
            </p>
          </Link>
        </li>
      ))
      break
    case 'footer':
      navLinksJSX = FOOTER_LINK_LIST.map(({ name, slug }) => (
        <li key={slug}>
          <Link
            to={`/${currentLanguage}/${slug}`}
            activeClassName="nav-links__link--active"
          >
            <Trans id={name} />
          </Link>
        </li>
      ))
      break
    default:
      navLinksJSX = null
      break
  }

  return <ul className={`nav-links nav-links--${place}`}>{navLinksJSX}</ul>
}

export default NavLinks
