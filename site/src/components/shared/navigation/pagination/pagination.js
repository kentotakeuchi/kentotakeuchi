import React from 'react'
import { Link } from 'gatsby'
import { Trans } from '@lingui/macro'
import './pagination.scss'

const Pagination = ({ context }) => {
  const { currentPage, totalPages, pathPrefix } = context

  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages
  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  // To prevent from putting dots multiple times
  // ex: 1 .. 3 4 5 .. 27 <-- only once for each side
  let hasDotsLeft = false
  let hasDotsRight = false
  return (
    <ul className="pagination">
      {!isFirst && (
        <Link to={`${pathPrefix}/${prevPage}`} rel="prev">
          <Trans>
            <span>«&nbsp;</span>前
          </Trans>
        </Link>
      )}

      {/* TODO: ugly logic to put dots between numbers */}
      {/* Logic for displaying page numbers */}
      {Array.from({ length: totalPages }, (_, i) => {
        // Because page starts with "1", not 0
        ++i

        if (
          i === 1 || // first page
          i === totalPages || // last page
          (i >= currentPage - 1 && i <= currentPage + 1)
        ) {
          return (
            <li key={i}>
              <Link
                to={`${pathPrefix}/${i === 1 ? '' : i}`}
                activeClassName="pagination__num--active"
              >
                {i}
              </Link>
            </li>
          )
        } else if (1 < i && i < currentPage - 1) {
          if (hasDotsLeft) return null
          hasDotsLeft = true
          return <li key={i}>..</li>
        } else if (currentPage + 1 < i && i < totalPages) {
          if (hasDotsRight) return null
          hasDotsRight = true
          return <li key={i}>..</li>
        } else {
          return null
        }
      })}

      {!isLast && (
        <Link to={`${pathPrefix}/${nextPage}`} rel="next">
          <Trans>
            次<span>&nbsp;»</span>
          </Trans>
        </Link>
      )}
    </ul>
  )
}

export default Pagination
