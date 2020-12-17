import React, { FunctionComponent, useEffect } from 'react'
import { PageProps } from 'gatsby'
import { I18nProvider } from '@lingui/react'

import Layout from './navigation/layout/layout'
import useI18n from '../../hooks/i18n-hook'
import likesContext from '../../contexts/likes-context'
import useLikes from '../../hooks/likes-hook'
import useLikesQuery from '../../hooks/likes-query-hook'

import {
  PageContextProps,
  SinglePageContextProps,
  TemplatePageContextProps,
} from '../../types/types'

interface Props {
  location: Location
  pageContext: PageContextProps &
    SinglePageContextProps &
    TemplatePageContextProps
  props: PageProps
}

const AppContainer: FunctionComponent<Props> = ({
  children,
  location,
  pageContext,
  ...props
}) => {
  const { pathname } = location
  const curLang = pageContext.langKey || pageContext.language

  // set up i18n stuff
  const { i18n } = useI18n(curLang)

  const {
    allLikes,
    hasLikes,
    setInitialLikesHandler,
    setLikesHandler,
    checkLikesHandler,
    updateLikesHandler,
  } = useLikes()
  const initialData = useLikesQuery()

  // set initial values of likes at the first render
  useEffect(() => {
    setInitialLikesHandler(initialData)
  }, [])

  // Merge props, and pathname (inefficient but legible and maintainable <-- destructure & merge)
  const newProps = { ...props, pathname }
  return (
    <I18nProvider i18n={i18n}>
      <likesContext.Provider
        value={{
          allLikes: allLikes,
          hasLikes: hasLikes,
          setUpdatedLikes: setLikesHandler,
          checkLikes: checkLikesHandler,
          updateLikes: updateLikesHandler,
        }}
      >
        <Layout {...newProps}>{children}</Layout>
      </likesContext.Provider>
    </I18nProvider>
  )
}

export default AppContainer
