import React, { FunctionComponent, useEffect } from 'react'
import { Link } from 'gatsby'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'

import useSiteMetadata from '../../../../hooks/site-metadata-hook'
import useScroll from '../../../../hooks/scroll-hook'
import useSideDrawer from '../../../../hooks/side-drawer-hook'

import './layout.scss'
import BG from '../../ui-elements/bg/particles/particles'
import SideDrawer from '../side-drawer/side-drawer'
import Header from '../header/header'
import NavLinks from '../nav-links/nav-links'
import Language from '../language/language'
import Burger from '../burger/burger'
import Footer from '../footer/footer'
import SNS from '../sns/sns'
import Brand from '../brand/brand'
// import Icon from '../../ui-elements/icon/icon'
import shuffleText from '../../../../utils/suffle-text'

interface Props {
  pathname: string
}

const Layout: FunctionComponent<Props> = ({ children, pathname }) => {
  // Hooks
  const { i18n } = useLingui()
  const { isShow, setIsShow, scrollDownHideUpShow } = useScroll()
  const {
    drawerIsOpen,
    openDrawerHandler,
    closeDrawerHandler,
  } = useSideDrawer()

  scrollDownHideUpShow()

  // Show header when re-rendering happens
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
      <Brand />
      <Burger onClick={openDrawerHandler} isOpen={drawerIsOpen} />

      <SideDrawer show={drawerIsOpen} onCancel={closeDrawerHandler}>
        <nav className="side-drawer__nav">
          <NavLinks place="side-drawer" />
          <SNS width={20} height={20} place="side-drawer" />
        </nav>
        <div className="side-drawer__footer">
          <Language place="side-drawer" path={pathname} />
          <small id={`copyright`}>
            © {new Date().getFullYear()} {i18n._(t`kento takeuchi`)}
          </small>
        </div>
      </SideDrawer>

      <Header className={isShow ? 'hide' : ''}>
        <Brand />
        <nav className="header__nav">
          <NavLinks place="header" />
          <Language place="header" path={pathname} />
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
