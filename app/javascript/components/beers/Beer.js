import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Beer = () => {
  const [beer, setBeer] = useState([])
  useEffect(() => {
    axios.get('/api/v1/beers')
      .then(resp => {
        setBeer(resp.data.beers)
        console.log(resp.data)
      })
  }, [])






  return (
    <><style>{`
    table, tr, th, td{
      border:1px solid black;
    }
    img{
      width: 50px;
      height: 115px;
    }
  `}</style><div className='Beers'>
        <div className="header">
          <h1>Beers</h1>
        </div>
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
            {beer && beer.map(({id, name,tagline,first_brewed, description, abv, ingredients: {yeast}, image_url}, index) => 
              <tr key={`beers-${index}`}>
                <td >{id}</td>
                <td >{name}</td>
                <td >{tagline}</td>
                <td >{first_brewed}</td>
                <td >{description}</td>
                <td >{abv}</td>
                <td >{yeast}</td>
                <td ><img src={image_url} /></td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div></>
  )
}

export default Beer