import React from 'react'

function SetPagination({showPerPage, beer, Pagination, onPaginationChange, pageDivider}) {
  return (
    <>
      <div>
        <div>
          <h2>Showing Result Per Page {showPerPage}</h2>
          <h2>Total Number Of beers {beer.length}</h2>
          <label> Pagination Per Page </label>
          <input placeholder='Pagination Per Page...' value={showPerPage === 25 ? "" : showPerPage} onInput={(e) => pageDivider(e)} />
        </div>
        <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={beer.length} />
      </div>
    </>
  )
}

export default SetPagination
