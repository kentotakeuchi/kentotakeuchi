import React from 'react'
import Image from 'gatsby-image'
import { t, Trans } from '@lingui/macro'
import './about.scss'
import SEO from '../components/seo'
import useImage from '../hooks/image-hook'
import { getAllLocaleUtils } from '../hooks/i18n-hook'

const aboutPage = () => {
  const { me } = useImage()
  const { i18n, locale } = getAllLocaleUtils()

  return (
    <>
      <SEO title={i18n._(t`About`)} lang={locale} />
      <div className="about-page">
        <header className="about-page__header">
          <div className="about-page__text-wrapper">
            <h1>{i18n._(t`Kento Takeuchi`)}</h1>
            <h3>{i18n._(t`Soccer Advocate`)}</h3>
            <ul>
              <Trans>
                <li>
                  <p>
                    <span>Position: </span>CDM, CAM, FW
                  </p>
                </li>
                <li>
                  <p>
                    <span>Strength: </span>Neat touch, Turn, Prediction,
                    Hardworking, Agility
                  </p>
                </li>
                <li>
                  <p>
                    <span>Weakness: </span>Long kick, Scoring ability
                  </p>
                </li>
                <li>
                  <p>
                    <span>I like: </span>Ronaldinho, Zidan, FC.Barcelona, Real
                    Madrid
                  </p>
                </li>
                <li>
                  <p>
                    <span>Location: </span>Santa Clara
                  </p>
                </li>
                <li>
                  <p>
                    <span>Language: </span>Japanese, English(not fluent)
                  </p>
                </li>
              </Trans>
            </ul>
          </div>
          <Image fluid={me} alt={i18n._(t`kento takeuchi`)} />
        </header>
        <main className="about-page__main">
          <div className="about-page__main-left">
            <h3>{i18n._(t`Introduction`)}</h3>
            <p>{i18n._(t``)}</p>
            <p>{i18n._(t``)}</p>
          </div>
          <div className="about-page__main-right">
            <h3>{i18n._(t`Who benefits from my lesson?`)}</h3>
            <ul>
              <li>
                <p>{i18n._(t``)}</p>
              </li>
              <li>
                <p>{i18n._(t``)}</p>
              </li>
              <li>
                <p>{i18n._(t``)}</p>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  )
}

export default aboutPage
