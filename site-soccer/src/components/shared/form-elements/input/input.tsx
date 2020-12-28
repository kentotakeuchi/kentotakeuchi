import React from 'react'
import { t } from '@lingui/macro'
import './input.scss'
import { getAllLocaleUtils } from '../../../../hooks/i18n-hook'

interface Props {
  element: 'input' | 'textarea' | 'select'
  label: string
  type?: string
  name?: string
  placeholder: string
  options?: any[]
}

// TODO: how to translate placeholder?
const Input = ({ element, label, type, name, placeholder, options }: Props) => {
  console.log({ options })

  const { i18n } = getAllLocaleUtils()

  let inputElement
  switch (element) {
    case 'input':
      inputElement = (
        <input type={type} name={name} placeholder={i18n._(placeholder)} />
      )
      break
    case 'textarea':
      inputElement = <textarea name={name} placeholder={i18n._(placeholder)} />
      break
    case 'select':
      inputElement = (
        <select name={name}>
          <option value="">{i18n._(t`Please select one`)}</option>
          {options &&
            options.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.name}
              </option>
            ))}
        </select>
      )
      break
    default:
      inputElement = (
        <input type={type} name={name} placeholder={i18n._(placeholder)} />
      )
  }

  return (
    <div className="form-control">
      <label>
        {i18n._(label)}: {inputElement}
      </label>
    </div>
  )
}

export default Input
