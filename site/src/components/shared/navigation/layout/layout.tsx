import React, { FunctionComponent, useEffect } from 'react'
import { Link } from 'gatsby'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'

import useSiteMetadata from '../../../../hooks/site-metadata-hook'
import useScroll from '../../../../hooks/scroll-hook'

import './layout.scss'
// import SideDrawer from '../side-drawer/side-drawer'
import BG from '../../ui-elements/bg/particles/particles'
import Header from '../header/header'
import NavLinks from '../nav-links/nav-links'
import Language from '../language/language'
// import Burger from '../burger/burger'
import Footer from '../footer/footer'
import SNS from '../sns/sns'
// import Icon from '../../ui-elements/icon/icon'
import shuffleText from '../../../../utils/suffle-text'

interface Props {
  pathname: string
}

const Layout: FunctionComponent<Props> = ({ children, pathname }) => {
  // Hooks
  const { i18n } = useLingui()
  const { locale } = i18n
  const { titleJa, titleEn } = useSiteMetadata()
  const { isShow, setIsShow, scrollDownHideUpShow } = useScroll()

  scrollDownHideUpShow()

  useEffect(() => {
    setIsShow(false)
  }, [])

  useEffect(() => {
    let ids = ['brand-title', 'copyright']

    ids.forEach(id => {
      shuffleText(id)
    })
  }, [])

  return (
    <>
      <BG />

      <Header className={isShow ? 'hide' : ''}>
        <div className={`header__title-wrapper`}>
          <Link to={`/${locale}`}>
            <h1
              className={`header__title ${
                locale === 'en' && 'header__title--en'
              }`}
              id={`brand-title`}
            >
              {locale === 'ja' ? titleJa : titleEn}
            </h1>
          </Link>
        </div>
        <nav className="header__nav">
          <NavLinks place="header" />
          <Language place="header" path={pathname} />
          {/* <Burger onClick={openDrawerHandler} isOpen={drawerIsOpen} /> */}
        </nav>
      </Header>

      <main className="layout__main">{children}</main>

      <Footer>
        <div className="footer__left-wrapper">
          <small id={`copyright`}>
            © {new Date().getFullYear()} {i18n._(t`kento takeuchi`)}
          </small>
        </div>
        <div className="footer__right-wrapper">
          <SNS width={20} height={20} place="footer" />
        </div>
      </Footer>
    </>
  )
}

export default Layout
