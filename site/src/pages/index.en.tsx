import React from 'react'
import { PageProps } from 'gatsby'
import { useLingui } from '@lingui/react'

const HomePage = (props: PageProps) => {
  const { i18n } = useLingui()
  console.log({ i18n })

  return (
    <div>
      {/* {JSON.stringify(props, null, 2)} */}
      <span>Current locale: {i18n.locale}</span>
    </div>
  )
}

export default HomePage
