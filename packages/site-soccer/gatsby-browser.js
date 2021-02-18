import React from 'react'
import AppContainer from './src/components/app-container'
import './src/styles/index.scss'
import './src/components/shared/ui-elements/loading-spinner/loading-spinner.scss'

// Show/Hide loading spinner...
export const onClientEntry = () => {
  document.getElementById('loader-wrapper').style.display = 'block'
}
export const onPreRouteUpdate = () => {
  document.getElementById('loader-wrapper').style.display = 'block'
}
export const onRouteUpdateDelayed = () => {
  document.getElementById('loader-wrapper').style.display = 'block'
}

// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname)
  console.log('old pathname', prevLocation ? prevLocation.pathname : null)
  document.getElementById('loader-wrapper').style.display = 'none'
}

export const wrapPageElement = ({ element, props }) => {
  console.log({ element, props })
  return <AppContainer {...props}>{element}</AppContainer>
}
