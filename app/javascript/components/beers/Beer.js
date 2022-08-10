import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination';



const Beer = () => {
  const [beer, setBeer] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [searchById, setSearchById] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const [searchByFirstBrewed, setSearchByFirstBrewed] = useState("");
  const [searchByYeast, setSearchByYeast] = useState("");
  const [searchByAbv, setSearchByAbv] = useState("");

  const [showPerPage, setShowPerPage] = useState(25)
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  })

  // useEffect(() => {
  //   axios.get('/api/v1/beers')
  //       .then(resp => {
  //         setBeer(resp.data.beers)
  //         // console.log(resp.data)
  //         setSearchApiData(resp.data.beers)
  //       })
  // }, [])

  useState(() => {
    async function fetchData(){
      const resp = await axios.get('/api/v1/beers')
          .then(resp => {
            setBeer(resp.data.beers)
            setSearchApiData(resp.data.beers)
            })
    }
    return fetchData();
  })



  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end })
  };


  // const pageDivider1 = (e) => {
  //   if (e.target.value === "") {
  //     setShowPerPage(25)
  //   }
  //   else {
  //     const filterResult = e.target.value
  //     setShowPerPage(filterResult)
  //     console.log( "Pagination Per Page " + filterResult)
  //     console.log(`length of spp ${filterResult.length}`)
  //   }
  //   setShowPerPage(e.target.value)
  // }

  const pageDivider = (e) => {
    const filterResult = e.target.value
    if (filterResult.length === 0 ){
      setShowPerPage(1)
    }
    // else if (filterResult.length === 0 ) {
    //   setShowPerPage(1)
    // }
    else {
      setShowPerPage(filterResult)
      console.log( "Pagination Per Page " + filterResult)
      console.log(`length of spp ${filterResult.length}`)
    }
  }





  //Search Fields code...

  // Search By Id

  const idSearch = (e) => {
    if (e.target.value == "") {
      setBeer(searchApiData)
    } else {
      const filterResult = searchApiData.filter(beer => beer.id == e.target.value)
      setBeer(filterResult)
    }
    setSearchById(e.target.value)
  }

  // Search By Name

  const nameSearch = (e) => {
    if (e.target.value == "") {
      setBeer(searchApiData)
    } else {
      const filterResult = searchApiData.filter(beer => beer.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setBeer(filterResult)
    }
    setSearchByName(e.target.value)
  }

  // Search By FirstBrewed

  const firstBrewedSearch = (e) => {
    if (e.target.value == "") {
      setBeer(searchApiData)
    } else {
      const filterResult = searchApiData.filter(beer => beer.first_brewed.includes(e.target.value))
      setBeer(filterResult)
    }
    setSearchByFirstBrewed(e.target.value)
  }

  // Search By Yeast

  const yeastSearch = (e) => {
    if (e.target.value == "") {
      setBeer(searchApiData)
    } else {
      const filterResult = searchApiData.filter(beer => beer.ingredients.yeast.toLowerCase().includes(e.target.value.toLowerCase()))
      setBeer(filterResult)
    }
    setSearchByYeast(e.target.value)
  }
  // Search By Abv

  const abvSearch = (e) => {
    if (e.target.value == "") {
      setBeer(searchApiData)
    } else {
      const filterResult = searchApiData.filter(beer => beer.abv >= e.target.value)
      setBeer(filterResult)
    }
    setSearchByAbv(e.target.value)
  }




  return (
    <><style>{`
    table, tr, th, td{
      border:1px solid black;
    }
    img{
      width: 50px;
      height: 115px;
    }
  `}
    </style><div className='Beers'>
        <div className="header">
          <h1>Beers</h1>
        </div>
        {/* Search by Id */}
        <div>
          <label>Search By Id </label>
          <input placeholder='Search By Id...' value={searchById} onInput={(e) => idSearch(e)} />
        </div>
        {/* Search by name */}
        <div>
          <label>Search By Name </label>
          <input placeholder='Search By Name...' value={searchByName} onInput={(e) => nameSearch(e)} />
        </div>
        {/* Search by FirstBrewed */}
        <div>
          <label>Search By First-Brewed </label>
          <input placeholder='Search By First-Brewed...' value={searchByFirstBrewed} onInput={(e) => firstBrewedSearch(e)} />
        </div>
        {/* Search by Yeast */}
        <div>
          <label>Search By Yeast </label>
          <input placeholder='Search By Yeast...' value={searchByYeast} onInput={(e) => yeastSearch(e)} />
        </div>
        {/* Search by Abv */}
        <div>
          <label>Search By Abv </label>
          <input placeholder='Search By Abv...' value={searchByAbv} onInput={(e) => abvSearch(e)} />
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
              {beer && beer.slice(pagination.start, pagination.end).map(({ id, name, tagline, first_brewed, description, abv, ingredients: { yeast }, image_url }, index) =>
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
      </div>
      <div>
        <div>
          <h2>{showPerPage} ya change kr k show kr rha hai</h2>
          <h2>{beer.length} beer ki length</h2>
          <label> Pagination Per Page </label>
          <input placeholder='Pagination Per Page...' value={showPerPage} onInput={(e) => pageDivider(e)} />
          {/* <button type='button' onClick={(e) => getDivider(e)} > Get Beers Per Page </button> */}
        </div>
        <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={beer.length} />
      </div>
    </>
  )
}

export default Beer