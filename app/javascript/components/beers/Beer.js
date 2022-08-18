import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination';
import {DebounceInput} from "react-debounce-input";
import genericFunction from "./GenericFunction";
// import async from "async";

const Beer = () => {
  const [beer, setBeer] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  // search fields useStates
  // const [searchById, setSearchById] = useState("");
  // const [searchByName, setSearchByName] = useState("");
  // const [searchByFirstBrewed, setSearchByFirstBrewed] = useState("");
  // const [searchByYeast, setSearchByYeast] = useState("");
  // const [searchByAbv, setSearchByAbv] = useState("");
  const [search, setSearch] = useState(
      {
        id : "",
        name : "",
        first_brewed : "",
        yeast : "",
        abv : "",
      }
  )

  //pagination UseStates
  const [showPerPage, setShowPerPage] = useState(25)
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  })

  useEffect(() => {
    axios.get('/api/v1/beers')
        .then(resp => {
          setBeer(resp.data.beers)
          setSearchApiData(resp.data.beers)
        })
  }, [])

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end })
  };

  const pageDivider = (e) => {
    const filterResult = e.target.value
    if (filterResult === "" || filterResult == 0 ){
      setShowPerPage(25)
    }
    else {
      setShowPerPage(filterResult)
    }
  }

  // Search By Id
  // useEffect(()=>{
  //   if (search.searchById == ""){
  //     setBeer(searchApiData)
  //   }else{
  //     const filterResult = searchApiData.filter(beer => beer.id == search.searchById)
  //     setBeer(filterResult)
  //   }
  // },[search.searchById])

  // Search By Abv
  // useEffect(()=>{
  //   if (search.searchByAbv == ""){
  //     setBeer(searchApiData)
  //   }
  //   else{
  //     const filterResult = searchApiData.filter(beer => beer.abv >= search.searchByAbv)
  //     setBeer(filterResult)
  //   }
  // },[search.searchByAbv])

  // Search By generic function

  const inputEvent = (event)=>{
    const {value , name}= event.target;
    setSearch({
      ...search,
      [name]: value,
    })
    if (name === undefined){
      setBeer(searchApiData)
    }else if (name === "yeast") {
      const filterResult = searchApiData.filter(beer => beer.ingredients[`${name}`].toLowerCase().includes(value.toLowerCase()))
      setBeer(filterResult)
      console.log(filterResult)
    }else{
      const filterResult = searchApiData.filter(beer => beer[`${name}`].toLowerCase().includes(value.toLowerCase()))
      setBeer(filterResult)
      console.log(filterResult)
    }
  }


  // const inputEvent = (event)=>{
  //   const {value , name}= event.target;
  //   setSearch((preValue) => {
  //     console.log(preValue)
  //     return{
  //     ...search,
  //     [name]: value,
  //     }
  //   })
  //
  //   if (name === undefined){
  //     setBeer(searchApiData)
  //   }else if (name === "yeast" && name === "name" && name === "first_brewed") {
  //     const filterResult = searchApiData.filter(beer => beer.ingredients[`${name}`].toLowerCase().includes(value.toLowerCase()))
  //     setBeer(filterResult)
  //   }else if(name === "id"){
  //     const filterResult = searchApiData.filter(beer => beer[`${name}`] == value)
  //     setBeer(filterResult)
  //   }else{
  //     const filterResult = searchApiData.filter(beer => beer[`${name}`] >= value)
  //     setBeer(filterResult)
  //   }
  //
  //
  // }



  const inputEvent1 = (event)=>{
    const {value , name}= event.target;
    setSearch({
      ...search,
      [name]: value,
    })
    if (name === undefined){
      setBeer(searchApiData)
    }else if (name === "id") {
      const filterResult = searchApiData.filter(beer => beer[`${name}`] == value)
      setBeer(filterResult)
      console.log(filterResult)

    }else{
      const filterResult = searchApiData.filter(beer => beer[`${name}`] >= value)
      setBeer(filterResult)
      console.log(filterResult)

    }
  }

  // Search By Name
  // useEffect(()=>{
  //   if (search.searchByName == ""){
  //     setBeer(searchApiData)
  //   }else{
  //     const filterResult = searchApiData.filter(beer => beer.name.toLowerCase().includes(search.searchByName.toLowerCase()))
  //     setBeer(filterResult)
  //   }
  // },[search.searchByName])

  // Search By FirstBrewed
  // useEffect(()=>{
  //   if (search.searchByFirstBrewed == ""){
  //     setBeer(searchApiData)
  //   }else{
  //     const filterResult = searchApiData.filter(beer => beer.first_brewed.toLowerCase().includes(search.searchByFirstBrewed.toLowerCase()))
  //     setBeer(filterResult)    }
  // },[search.searchByFirstBrewed])

  // Search By Yeast
  // useEffect(()=>{
  //     if (search.searchByYeast == ""){
  //       setBeer(searchApiData)
  //     }else{
  //       const filterResult = searchApiData.filter(beer => beer.ingredients.yeast.toLowerCase().includes(search.searchByYeast.toLowerCase()))
  //       setBeer(filterResult)
  //     }
  //
  // },[search.searchByYeast])

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
          <DebounceInput
              placeholder={"Search By Id..."}
              value={search.id}
              minLength={1}
              debounceTimeout={800}
              type="number"
              name="id"
              onChange={inputEvent1} />
        </div>
        {/* Search by name */}
        <div>
          <label>Search By Name </label>
          <DebounceInput
              placeholder={"Search By Name..."}
              value={search.name}
              minLength={1}
              debounceTimeout={800}
              type="text"
              name="name"
              onChange={inputEvent} />
        </div>
        {/* Search by FirstBrewed */}
        <div>
          <label>Search By First-Brewed </label>
          <DebounceInput
              placeholder={"Search By First-Brewed..."}
              value={search.first_brewed}
              minLength={1}
              debounceTimeout={800}
              type="text"
              name="first_brewed"
              onChange={inputEvent} />
        </div>
        {/* Search by Yeast */}
        <div>
          <label>Search By Yeast </label>
          <DebounceInput
              placeholder={"Search By Yeast..."}
              value={search.yeast}
              minLength={1}
              debounceTimeout={800}
              type="text"
              name="yeast"
              onChange={inputEvent} />
        </div>
        {/* Search by Abv */}
        <div>
          <label>Search By Abv </label>
          <DebounceInput
              placeholder={"Search By Abv..."}
              value={search.abv}
              minLength={1}
              debounceTimeout={800}
              type="text"
              name="abv"
              onChange={inputEvent1} />
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
          <h2>Showing Result Per Page {showPerPage}</h2>
          <h2>Total Number Of beers {beer.length}</h2>
          <label> Pagination Per Page </label>
          <input placeholder='Pagination Per Page...' value={showPerPage === 25 ? "": showPerPage} onInput={(e) => pageDivider(e)} />
        </div>
        <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={beer.length} />
      </div>
    </>
  )
}

export default Beer