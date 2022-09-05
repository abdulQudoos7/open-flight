import React from 'react'

function SearchFields({search, inputEvent}) {
  return (
    <>
    {/* Search by Id */}
    <div>
          <label>Search By Id </label>
          <input
              placeholder={"Search By Id..."}
              value={search.id}
              type="number"
              name="id"
              onChange={(event) => {
                inputEvent(event)
              }} />
        </div>
        {/* Search by name */}
        <div>
          <label>Search By Name </label>
          <input
              placeholder="Search By Name..."
              value={search.name}
              type="text"
              name="name"
              onChange={(event) => {
                inputEvent(event)
              }}  />
        </div>
        {/* Search by FirstBrewed */}
        <div>
          <label>Search By First-Brewed </label>
          <input
              placeholder={"Search By First-Brewed..."}
              value={search.first_brewed}
              type="text"
              name="first_brewed"
              onChange={(event) => {
                inputEvent(event)
              }} />
        </div>
        {/* Search by Yeast */}
        <div>
          <label>Search By Yeast </label>
          <input
              placeholder={"Search By Yeast..."}
              value={search.yeast}
              type="text"
              name="yeast"
              onChange={(event) => {
                inputEvent(event)
              }} />
        </div>
        {/* Search by Abv */}
        <div>
          <label>Search By Abv </label>
          <input
              placeholder={"Search By Abv..."}
              value={search.abv}
              type="text"
              name="abv"
              onChange={(event) => {
                inputEvent(event)
              }} />
        </div>
      
    </>
  )
}

export default SearchFields
