import React from 'react'
import Image from 'gatsby-image'
import { useLingui } from '@lingui/react'
import { t, Trans } from '@lingui/macro'
import './profile.scss'
import SEO from '../components/shared/seo'
import useImage from '../hooks/image-hook'

const ProfilePage = () => {
  const { i18n } = useLingui()
  const { locale } = i18n

  const { me } = useImage()

  return (
    <>
      <SEO title={i18n._(t`Profile`)} lang={locale} />
      <div className="profile-page">
        <header className="profile-page__header">
          <div className="profile-page__text-wrapper">
            <h1>{i18n._(t`kento takeuchi`)}</h1>
            {/* <h3>{i18n._(t`web developer | soccer player & coach`)}</h3> */}
            <h3>
              <Trans>
                <span>web developer | </span>
                <br />
                <span>soccer player & coach</span>
              </Trans>
            </h3>
            <p>
              <Trans>
                <span>JavaScript / </span>
                <span>TypeScript / </span>
                <span>React / </span>
                <span>Gatsby / </span>
                <span>Node.js / </span>
                <span>soccer / </span>
                <span>Surfing</span>
              </Trans>
            </p>
          </div>
          <Image fluid={me} alt={i18n._(t`kento takeuchi`)} />
        </header>
        <main className="profile-page__main">
          <p>
            {i18n._(
              t`Born in Yamaguchi in 1984. Graduated from Doshisha University in Kyoto with a degree in economics. Spent 8 years working as a sales person at various supermarkets in Tokyo and pursued his passion for soccer and surfing. Came to the U.S. and completed the Certificate Program in Computer Programming of University of California, Santa Cruz, Silicon Valley Extension in 2018.`
            )}
          </p>
          <p>
            {i18n._(
              t`Kento, JavaScript web developer, has worked hard to do useful things for others with his current skills. As of now, a new project is created and developed as a result of his aspiration to grow as a professional web developer. Recently, he has learned new tools and knowledge related to web development, and also random stuffs in order to broaden his possibility to support others.`
            )}
          </p>
          <p>
            {i18n._(
              t`Outside of his professional career, Kento is an enthusiastic soccer player. Playing soccer seriously helps him not only to work on his technical skills, but also reminds him of the importance of respecting others while teaching himself discipline and finding joy in his life. He used to belong to a soccer team consisting of mainly Japanese players in the San Francisco Premier League, and currently belongs to two multinational local soccer teams in Santa Clara and Hayward.`
            )}
          </p>
          <p>
            {i18n._(
              t`His family, friends and people he meets are his greatest source of support, without which he couldn't grow and challenge himself to the fullest extent. His passion for his career drives him to excel in his professional endeavors.`
            )}
          </p>
        </main>
      </div>
    </>
  )
}

export default ProfilePage
