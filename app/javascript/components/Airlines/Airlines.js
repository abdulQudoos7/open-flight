import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(()=> {
    //Get all of our airlines from api
    axios.get('/api/v1/airlines.json')
    .then( resp =>{
      console.log(resp)
      setAirlines(resp.data.data)
    } )
    .catch( resp =>console.log(resp) )
  }, [])



  const list = airlines.map( item => {
    return(<li key={item.attributes.name}>{item.attributes.name}</li>)
  })


  return (
    <div className='home'>
      <div className="header">
        <h1>Open Flights</h1>
        <h3>honest, unbiased ariline reviews.</h3>
      </div>
      <div className='grid'>
        <ul>{list}</ul>
      </div>
    </div>
  )
}

export default Airlines