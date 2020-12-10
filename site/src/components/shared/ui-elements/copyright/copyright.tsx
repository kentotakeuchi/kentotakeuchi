import React, { useEffect } from 'react'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'
import shuffleText from '../../../../utils/suffle-text'

interface Props {
  place: string
}

const Copyright = ({ place }: Props) => {
  const { i18n } = useLingui()

  useEffect(() => {
    let ids = ['copyright--side-drawer', 'copyright--footer']

    ids.forEach(id => {
      shuffleText(id)
    })
  }, [])

  return (
    <small id={`copyright--${place}`}>
      © {new Date().getFullYear()} {i18n._(t`kento takeuchi`)}
    </small>
  )
}

export default Copyright
