import React from 'react'
import { Link } from 'gatsby'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'
import './prev-next-pagination.scss'

// TODO: ugly logic..
const PrevNextPagination = ({ items, curSlug, prefix }: any) => {
  const { i18n } = useLingui()

  const curIndex = items.findIndex((item: any) => item.slug === curSlug)
  const isFirst = curIndex === 0
  const isLast = curIndex === items.length - 1
  const prevIndex = curIndex - 1 === 0 ? 0 : curIndex - 1
  const nextIndex = curIndex + 1

  return (
    <ul className="prev-next-pagination">
      {!isFirst ? (
        <li className="prev-next-pagination__link prev-next-pagination__link--prev">
          <Link to={`${prefix}/${items[prevIndex].slug}`} rel="prev">
            <span>«&nbsp;</span>
            {`${items[prevIndex].title.substring(0, 20)}..`}
          </Link>
        </li>
      ) : (
        <li></li>
      )}

      <li className="prev-next-pagination__link prev-next-pagination__link--top">
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
        >
          {i18n._(t`top`)}
        </button>
      </li>

      {!isLast && (
        <li className="prev-next-pagination__link prev-next-pagination__link--next">
          <Link to={`${prefix}/${items[nextIndex].slug}`} rel="next">
            {`${items[nextIndex].title.substring(0, 20)}..`}
            <span>&nbsp;»</span>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default PrevNextPagination
