import React from 'react'
import { t } from '@lingui/macro'
import './contact.scss'
import SEO from '../components/seo'
import Input from '../components/shared/form-elements/input/input'
import Button from '../components/shared/form-elements/button/button'
import { getAllLocaleUtils } from '../hooks/i18n-hook'

const ContactPage = () => {
  const { i18n, locale } = getAllLocaleUtils()

  return (
    <>
      <SEO title={i18n._(t`Contact`)} lang={locale} />
      <div className="contact-page">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action={`/${locale}/contact-success`}
          netlify-honeypot="bot-field"
          className="contact-form"
        >
          {/* Tell Netlify what fields info we have to show submissions on Netlify dashboard */}
          <input type="hidden" name="form-name" value="contact" />

          {/* "Honeypot" fields are hidden form fields that lure bot users into completing a field that human users can't see. */}
          <p style={{ display: 'none' }}>
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <Input
            element="input"
            label={t`first name`}
            type="text"
            name="first-name"
            placeholder={t`kento`}
          />
          <Input
            element="input"
            label={t`last name`}
            type="text"
            name="last-name"
            placeholder={t`takeuchi`}
          />
          <Input
            element="input"
            label={t`email`}
            type="email"
            name="email"
            placeholder="example@mail.com"
          />
          <Input
            element="select"
            label={t`level`}
            name="level"
            placeholder=""
            options={[
              { name: 'beginner', value: 'beginner' },
              { name: 'intermediate', value: 'intermediate' },
              { name: 'advance', value: 'advance' },
            ]}
          />
          <Input
            element="textarea"
            label={t`message`}
            name="message"
            placeholder={t`feel free to ask anything or share your thought with me!`}
          />
          <Button type="submit">{i18n._(t`submit`)}</Button>
        </form>
      </div>
    </>
  )
}

export default ContactPage
