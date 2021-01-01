import React from 'react'
import Image from 'gatsby-image'
import { t, Trans } from '@lingui/macro'
import './about.scss'
import SEO from '../components/seo'
import Button from '../components/shared/form-elements/button/button'
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
                    <span>Residence: </span>Santa Clara
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
          <div className="about-page__paragraph">
            <h3>{i18n._(t`Self-introduction`)}</h3>
            <p>
              {i18n._(
                t`Hi there, I am Kento Takeuchi who is satisfied with my life as long as my family and friends are fine and I am able to play soccer. I have been in the bay area three years.`
              )}
            </p>
            <p>
              {i18n._(
                t`When I was in Japan, I belonged to a local team in Tokyo which included a professional coach and ex-professional players. I played as forward in the team and became a top scorer in a local league at once.`
              )}
            </p>
            <p>
              {i18n._(
                t`After came to U.S., I had belonged to Japanese team in San Francisco premier league and several local teams in South Bay. I currently have played as CDM or CAM in Chinese team.`
              )}
            </p>
          </div>
          <div className="about-page__paragraph">
            <h3>{i18n._(t`Why I start private lesson?`)}</h3>
            <p>
              {i18n._(
                t`I had been thinking of start my private lesson since I noticed that many people are enthusiastic about improving their soccer skills, but do not know how to properly train.`
              )}
            </p>
            <p>
              {i18n._(
                t`I have been assisting my friends to improve their skills. However, I hesitated to start my lesson officially because I do not have remarkable background and am not sociable person.`
              )}
            </p>
            <p>
              {i18n._(
                t`Nonetheless, I have found some fulfillment of my own to assist my friends, and realized my friends have been improving their basic skills and performances in an actual game. That is why I start my private lesson.`
              )}
            </p>
          </div>
          <div className="about-page__paragraph">
            <h3>{i18n._(t`What you can expect in my lesson?`)}</h3>
            <h4>{i18n._(t`Basic -> Judgement -> Pattern`)}</h4>
            <p>
              {i18n._(
                t`First of all, one of my friend and I will show up the lesson. He is not supposed to be a coach, but he might be able to give you a feedback.`
              )}
            </p>
            <p>
              {i18n._(
                t`We are mainly focusing on "basic" and "judgement" in my lesson. In my definition, basic means that you can properly trap, pass and kick even if you are under pressure or tired. Judgement means that you can pick an appropriate choice from multiple possibilities under dynamic situations.`
              )}
            </p>
            <p>
              {i18n._(
                t`It might sound boring for someone and intimidating for the others. However you feel those words, basic and judgement skills are essential ones in order to perform well consistently in a real game. Since you do not have much time to think of controlling a ball or judging in the game, you have to keep quality of basic without thinking and judge quickly.`
              )}
            </p>
            <p>
              {i18n._(
                t`In addition, experience players have a lot of patterns in response with particular situations. The more patterns you have, the less effort you can play. Therefore, if you have certain skills, I am going to put some drills, which could happen in real game scenarios, to increase your patterns.`
              )}
            </p>
            <p>
              {i18n._(
                t`In a nutshell, my lesson is planned to train your muscle memory so that you can deal with a variety of situations properly. Therefore, you might be able to expect repetition. I am aware that it sounds not fun, but solid fundamental skills take you next level and help you scale your ability.`
              )}
            </p>
            <p>
              {i18n._(
                t`[BONUS]: This is a totally option. I regularly have a game with my teammates(+ their kids!). So, if you are interested in playing together, let's play with us.*1 There are two reasons why I suggest it. Firstly, this is a great chance for me to understand your strength and weakness. Therefore, I can provide you with more customized drills. Secondary, you can check my play in the game. Although I am not an ex-professional player, I believe it might be useful for you if you are beginner or intermediate level.`
              )}
            </p>
            <small>{i18n._(t`*1 It is for free (but after pandemic..)`)}</small>
          </div>
          <div className="about-page__paragraph">
            <h3>{i18n._(t`Who benefits from my lesson?`)}</h3>
            <ul>
              <li>
                <p>
                  {i18n._(
                    t`Those who are eager to improve your skills, but do not know how to properly train.`
                  )}
                </p>
              </li>
              <li>
                <p>
                  {i18n._(
                    t`Those who would like to improve one of the following: first touch, turn, juggling or 1on1. (because of my strength)`
                  )}
                </p>
              </li>
              <li>
                <p>
                  {i18n._(
                    t`Those who would like to focus on improving basic skills.`
                  )}
                </p>
              </li>
              <li>
                <p>
                  {i18n._(
                    t`Those who do not mind doing basic drills over and over.`
                  )}
                </p>
              </li>
              <li>
                <p>{i18n._(t`Those who enjoy improving itself.`)}</p>
              </li>
              <li>
                <p>
                  {i18n._(
                    t`Those who are humble and have capability to listen`
                  )}
                </p>
              </li>
              <li>
                <p>
                  {i18n._(
                    t`Those who are willing to challenge a new thing even if it is outside their comfort zone.`
                  )}
                </p>
              </li>
            </ul>
          </div>
        </main>
        <Button to={`/${locale}/contact`}>{i18n._(t`contact us`)}</Button>
      </div>
    </>
  )
}

export default aboutPage
