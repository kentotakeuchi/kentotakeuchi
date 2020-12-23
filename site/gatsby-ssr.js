import React from 'react'
import AppContainer from './src/components/shared/app-container'
import LoadingSpinner from './src/components/shared/ui-elements/loading-spinner/loading-spinner'

const HeadComponents = [
  <div key="modal" id="modal-hook" />,
  <div key="side-drawer" id="drawer-hook" />,
  <div key="backdrop" id="backdrop-hook" />,
  <div key="loader-wrapper" id="loader-wrapper">
    <LoadingSpinner overlay />,
  </div>,
]

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
}

export const wrapPageElement = ({ element, props }) => {
  console.log({ element, props })

  // TODO: temp..
  // check url is for soccer or not
  const isSoccer = props.location.pathname.includes('soccer')

  return !isSoccer ? <AppContainer {...props}>{element}</AppContainer> : null
}
