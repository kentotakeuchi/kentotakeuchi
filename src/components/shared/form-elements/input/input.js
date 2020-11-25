import React from 'react'
import { Trans } from '@lingui/macro'
import './input.scss'

// TODO: how to translate placeholder?
const Input = ({ element, label, type, name, placeholder, options }) => {
  let inputJSX
  switch (element) {
    case 'input':
      inputJSX = <input type={type} name={name} placeholder={placeholder} />
      break
    case 'textarea':
      inputJSX = <textarea name={name} placeholder={placeholder} />
      break
    case 'select':
      inputJSX = (
        <select name={name} multiple>
          <option value="">
            <Trans>選択して下さい（複数可）</Trans>
          </option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </select>
      )
      break
    default:
      inputJSX = <input type={type} name={name} placeholder={placeholder} />
  }

  return (
    <div className="form-control">
      <label>
        <Trans id={label} />: {inputJSX}
      </label>
    </div>
  )
}

export default Input
