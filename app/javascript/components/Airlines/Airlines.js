import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Airlines = () => {
  const [airlines, setAirlines] = useState([])
  const [count , setCount] = useState(0)
  
  const addCount = () => {
    setCount(count+1)
  }

  useEffect(()=> {
    //Get all of our airlines from api   
    //https://api.punkapi.com/v2/beers
    axios.get('/api/v1/airlines')
    // axios.get('https://api.punkapi.com/v2/beers')
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
        <button onClick={() => addCount}>Go </button>
        <h2>{count}</h2>
        <h1>Open Flights</h1>
        <h3>honest, unbiased ariline reviews.</h3>
      </div>
      <div className='grid'>
        <ul>{list}</ul>
        <ul>{list.id}</ul>
      </div>
    </div>
  )
}

export default Airlines