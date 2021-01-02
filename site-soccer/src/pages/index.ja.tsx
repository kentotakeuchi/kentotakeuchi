import React from 'react'
import { Link, PageProps } from 'gatsby'
import { t, Trans } from '@lingui/macro'
import './index.scss'
import SEO from '../components/seo'
import { getAllLocaleUtils } from '../hooks/i18n-hook'
import Button from '../components/shared/form-elements/button/button'
import Icon from '../components/shared/ui-elements/icon/icon'
import Ticker from '../components/shared/ui-elements/ticker/ticker'
import { Query } from '../../types/graphql-types'
import { PageContextType } from '../../types/custom-types'

const HomePage: React.FC<PageProps<Query, PageContextType>> = ({
  data,
  ...props
}) => {
  console.log({ data, props })

  const { i18n, locale } = getAllLocaleUtils()

  return (
    <>
      <SEO title={i18n._(t`Home`)} lang={locale} />
      <div className="home-page">
        <div className="home-page__box">
          <div className="home-page__left-box">
            <h3>{i18n._(t`private lesson`)}</h3>
            <ul>
              <li>{i18n._(t`Price: $10/h`)}</li>
              <li>{i18n._(t`Duration: 2hours`)}</li>
              <li>{i18n._(t`Location: TBD`)}</li>
              <li>
                <Link to={`./about`}>
                  {i18n._(t`Details about our lesson`)}
                </Link>
                <Icon width={20} height={20} id="icon-arrow" />
              </li>
            </ul>
          </div>
          <div className="home-page__right-box">
            <Button to={`./contact`}>{i18n._(t`contact us`)}</Button>
          </div>
        </div>
      </div>
      <Ticker>
        <Trans>
          <p>
            Hi there, I'm Kento. If you're interested in my lesson or have any
            questions, feel free to reach me out!
          </p>
        </Trans>
      </Ticker>
    </>
  )
}

export default HomePage
