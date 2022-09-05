import React from 'react'

function Table({beer, pagination} ) {
  return (
    <>
      <div className='grid'>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Tagline</th>
                <th>First Brewed</th>
                <th>Description</th>
                <th>Abv</th>
                <th>Yeast</th>
                <th>Images</th>
              </tr>
            </thead>
            <tbody>
              {/*{beer && beer.slice(pagination.start, pagination.end).map(({ id, name, tagline, first_brewed, description, abv, ingredients: { yeast }, image_url }, index) =>*/}
              {beer && beer.slice(pagination.start, pagination.end).map(({ id, name, tagline, first_brewed, description, abv, ingredients: { yeast }, image_url }, index) =>
                <tr key={`beers-${index}`}>
                  <td >{id}</td>
                  <td >{name}</td>
                  <td >{tagline}</td>
                  <td >{first_brewed}</td>
                  <td >{description}</td>
                  <td >{abv}</td>
                  <td >{yeast}</td>
                  <td ><img src={image_url} alt={image_url} /></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
    </>
  )
}

export default Table
