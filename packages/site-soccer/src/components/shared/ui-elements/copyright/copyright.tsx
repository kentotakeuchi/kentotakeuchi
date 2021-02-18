import React from 'react'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'
import './copyright.scss'

const Copyright = () => {
  const { i18n } = useLingui()

  return (
    <small className="copyright">
      © {new Date().getFullYear()} {i18n._(t`kento takeuchi`)}
    </small>
  )
}

export default Copyright
