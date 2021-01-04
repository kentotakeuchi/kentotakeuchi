import React from 'react'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'
import './contact.scss'
import SEO from '../components/shared/seo'
import Icon from '../components/shared/ui-elements/icon/icon'

const ContactPage = () => {
  const { i18n } = useLingui()
  const { locale } = i18n

  const width = 30
  const height = 30
  const color = 'rgb(245, 245, 245)'

  return (
    <>
      <SEO title={i18n._(t`Contact`)} lang={locale} />
      <section className="contact-page">
        <ul className="contact-page__preference">
          <li>
            <a
              href="mailto:kento.takeuchi.official@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                width={width}
                height={height}
                id="icon-email"
                color={color}
              />
            </a>
          </li>
        </ul>
        <ul className="contact-page__list">
          <li>
            <a
              href="https://github.com/kentotakeuchi?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                width={width}
                height={height}
                id="icon-github"
                color={color}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/takeuchi-kento-101b3549/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                width={width}
                height={height}
                id="icon-linkedin"
                color={color}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mikiotanaka/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                width={width}
                height={height}
                id="icon-instagram"
                color={color}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/mikio.tanaka.001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                width={width}
                height={height}
                id="icon-facebook"
                color={color}
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/KentoTakeuchi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                width={width}
                height={height}
                id="icon-twitter"
                color={color}
              />
            </a>
          </li>
          <li>
            <a
              href="tel:951-441-1777"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                width={width}
                height={height}
                id="icon-phone"
                color={color}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/place/Santa+Clara,+CA/@37.3710062,-122.037593,12z/data=!3m1!4b1!4m5!3m4!1s0x808fb7815c08c193:0xe475a47ca3c0bfc0!8m2!3d37.3541079!4d-121.9552356"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                width={width}
                height={height}
                id="icon-location"
                color={color}
              />
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

export default ContactPage
