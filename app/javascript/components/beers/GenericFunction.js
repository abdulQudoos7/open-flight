import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination';
import {DebounceInput} from "react-debounce-input";
// import async from "async";

const searchInitial={
    searchById : "",
    searchByName : "",
    searchByFirstBrewed : "",
    searchByYeast : "",
    searchByAbv : "",
}


const GenericFunction = () => {
    const [beer, setBeer] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    //search fields useStates
    // const [searchById, setSearchById] = useState("");
    // const [searchByName, setSearchByName] = useState("");
    // const [searchByFirstBrewed, setSearchByFirstBrewed] = useState("");
    // const [searchByYeast, setSearchByYeast] = useState("");
    // const [searchByAbv, setSearchByAbv] = useState("");

    const [search, setSearch] = useState({})

    //pagination UseStates
    const [showPerPage, setShowPerPage] = useState(25)
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    })

    // const [inputValue, setInputValue] = useState('')
    // const fakeApi = () => console.log(`fake API called ${inputValue}`)
    //
    // useEffect(()=>{
    //   const timer = setTimeout(()=>{
    //     fakeApi()
    //   },1000)
    //   return()=> clearTimeout(timer)
    // },[inputValue])

    useEffect(() => {
        axios.get('/api/v1/beers')
            .then(resp => {
                setBeer(resp.data.beers)
                // console.log(resp.data)
                setSearchApiData(resp.data.beers)
            })
    }, [])


    useEffect(()=>{
        console.log("state ",search);
    },[search])




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

    // const pageDivider = (e) => {
    //   let filterResult = e.target.value
    //   setShowPerPage(filterResult)
    //   console.log(`incoming value is ${filterResult}`)
    // }

    // const inputEvent = (event) => {
    //
    //     const value = event.target.value;
    //     const name = event.target.name;
    //
    //     setSearch({
    //         ...search,
    //         [name]:value,
    //     })
    // }

    //previous State

    //Search Fields code...

    // Search By Id

    // const idSearch = (e) => {
    //   if (e.target.value == "") {
    //     setBeer(searchApiData)
    //   } else {
    //     const filterResult = searchApiData.filter(beer => beer.id == e.target.value)
    //     setBeer(filterResult)
    //   }
    //   setSearchById(e.target.value)
    // }

    // useEffect(()=>{
    //     const data=search[Object.keys(search)[0]];
    //     const [name]=search[Object.keys(search)]
    //     console.log("name => ",name)
        // search?console.log(Number(search)):null
        // let x="123";
        // console.log(Number(x))
        // console.log(search);

      // if (searchById == ""){
      //   setBeer(searchApiData)
      // }else{
      //   if(typeof data!=='undefined') {
      //       const filterResult = searchApiData.filter(beer => beer.id.toLowerCase().includes(data.toLowerCase()))
      //       setBeer(filterResult)
      //   }
      // }
    // },[search])

    // console.log(`searchApiData is => ${searchApiData}`)

    // useEffect(() => {
    //   setBeer(searchApiData)
    //   const timer = setTimeout(()=>{
    //     // setIdSearch(searchById)
    //     // console.log(`ye searchById value ha ${searchById}`)
    //     if (searchById == ""){
    //       setBeer(searchApiData)
    //     }else{
    //       const filterResult = searchApiData.filter(beer =>beer.id == searchById)
    //       setBeer(filterResult)
    //     }
    //   }, 1000)
    //   return () => clearTimeout(timer)
    // }, [searchById])

    // console.log(`searchApiData is ${searchApiData}`)

    // Search By Name

    // const nameSearch = (e) => {
    //   if (e.target.value == "") {
    //     setBeer(searchApiData)
    //   } else {
    //     const filterResult = searchApiData.filter(beer => beer.name.toLowerCase().includes(e.target.value.toLowerCase()))
    //     setBeer(filterResult)
    //   }
    //   setSearchByName(e.target.value)
    // }

    // useEffect(()=>{
    //   const timer = setTimeout(()=>{
    //     if (searchByName == ""){
    //       // console.log(`searchByName  ${searchByName}`)
    //     }else{
    //       const filterResult = searchApiData.filter(beer => beer.name.toLowerCase().includes(searchByName))
    //       setBeer(filterResult)
    //       console.log(`searchByName  ${searchByName}`)
    //       console.log(beer)
    //     }
    //   },1000)
    //   return ()=>clearTimeout(timer)
    // },[searchByName])

    // useEffect(()=>{
    //   if (searchByName == ""){
    //     setBeer(searchApiData)
    //   }else{
    //     const filterResult = searchApiData.filter(beer => beer.name.toLowerCase().includes(searchByName.toLowerCase()))
    //     setBeer(filterResult)
    //   }
    // },[searchByName])

    // Search By FirstBrewed

    // const firstBrewedSearch = (e) => {
    //   if (e.target.value == "") {
    //     setBeer(searchApiData)
    //   } else {
    //     const filterResult = searchApiData.filter(beer => beer.first_brewed.includes(e.target.value))
    //     setBeer(filterResult)
    //   }
    //   setSearchByFirstBrewed(e.target.value)
    // }

    // useEffect(()=>{
    //   const timer = setTimeout(()=>{
    //     if (searchByFirstBrewed == ""){
    //       setBeer(searchApiData)
    //     }else{}
    //       const filterResult = searchApiData.filter(beer => beer.first_brewed.includes(searchByFirstBrewed))
    //       setBeer(filterResult)
    //
    //   },1000)
    //   return ()=> clearTimeout(timer)
    // },[searchByFirstBrewed])

    // useEffect(()=>{
    //   if (searchByFirstBrewed == ""){
    //     setBeer(searchApiData)
    //   }else{
    //     const filterResult = searchApiData.filter(beer => beer.first_brewed.includes(searchByFirstBrewed))
    //     setBeer(filterResult)    }
    // },[searchByFirstBrewed])

    // Search By Yeast

    // const yeastSearch = (e) => {
    //   if (e.target.value == "") {
    //     setBeer(searchApiData)
    //   } else {
    //     const filterResult = searchApiData.filter(beer => beer.ingredients.yeast.toLowerCase().includes(e.target.value.toLowerCase()))
    //     setBeer(filterResult)
    //   }
    //   setSearchByYeast(e.target.value)
    // }

    // useEffect(()=>{
    //   const timer = setTimeout(()=>{
    //     if (searchByYeast == ""){
    //       setBeer(searchApiData)
    //     }else{
    //       const filterResult = searchApiData.filter(beer => beer.ingredients.yeast.toLowerCase().includes(searchByYeast.toLowerCase()))
    //       setBeer(filterResult)
    //     }
    //   },1000)
    // },[searchByYeast])


    // useEffect(()=>{
    //     if (searchByYeast == ""){
    //       setBeer(searchApiData)
    //     }else{
    //       const filterResult = searchApiData.filter(beer => beer.ingredients.yeast.toLowerCase().includes(searchByYeast.toLowerCase()))
    //       setBeer(filterResult)
    //     }
    //
    // },[searchByYeast])

    // Search By Abv

    // const abvSearch = (e) => {
    //   if (e.target.value == "") {
    //     setBeer(searchApiData)
    //   } else {
    //     const filterResult = searchApiData.filter(beer => beer.abv >= e.target.value)
    //     setBeer(filterResult)
    //   }
    //   setSearchByAbv(e.target.value)
    // }

    // useEffect(()=>{
    //   const timer = setTimeout(()=>{
    //     if (searchByAbv == ""){
    //       setBeer(searchApiData)
    //     }
    //     else{
    //       const filterResult = searchApiData.filter(beer => beer.abv >= searchByAbv)
    //       setBeer(filterResult)
    //     }
    //   },1000)
    //
    // },[searchByAbv])

    // useEffect(()=>{
    //     if (searchByAbv == ""){
    //       setBeer(searchApiData)
    //     }
    //     else{
    //       const filterResult = searchApiData.filter(beer => beer.abv >= searchByAbv)
    //       setBeer(filterResult)
    //     }
    // },[searchByAbv])


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
            <div>
                <label>Search By Id </label>
                {/*<input placeholder='Search By Id...' value={searchById} onChange={(e) => idSearch(e)} />*/}
                {/*<input placeholder='Search By Id...' value={searchById} onChange={(e) => setSearchById(e.target.value)} />*/}
                <DebounceInput
                    placeholder={"Search By Id..."}
                    value={search.searchById}
                    minLength={1}
                    debounceTimeout={800}
                    type="tel"
                    name="searchById"
                    onChange={inputEvent} />

                {/*onChange={event => setSearchById(event.target.value)}*/}

            </div>
            {/* Search by name */}
            <div>
                <label>Search By Name </label>
                {/*<input placeholder='Search By Name...' value={searchByName} onChange={(e) => nameSearch(e)} />*/}
                {/*<input placeholder='Search By Name...' value={searchByName} onChange={(e) => setSearchByName(e.target.value.toLowerCase())} />*/}
                <DebounceInput
                    placeholder={"Search By Name..."}
                    value={search.searchByName}
                    minLength={1}
                    debounceTimeout={800}
                    type="text"
                    name="name"
                    onChange={inputEvent} />
            </div>
            {/* Search by FirstBrewed */}
            <div>
                <label>Search By First-Brewed </label>
                {/*<input placeholder='Search By First-Brewed...' value={searchByFirstBrewed} onChange={(e) => firstBrewedSearch(e)} />*/}
                {/*<input placeholder='Search By First-Brewed...' value={searchByFirstBrewed} onChange={(e) => setSearchByFirstBrewed(e.target.value)} />*/}
                <DebounceInput
                    placeholder={"Search By First-Brewed..."}
                    value={search.searchByFirstBrewed}
                    minLength={1}
                    debounceTimeout={800}
                    type="text"
                    name="first_brewed"
                    onChange={inputEvent} />
            </div>
            {/* Search by Yeast */}
            <div>
                <label>Search By Yeast </label>
                {/*<input placeholder='Search By Yeast...' value={searchByYeast} onChange={(e) => yeastSearch(e)} />*/}
                {/*<input placeholder='Search By Yeast...' value={searchByYeast} onChange={(e) => setSearchByYeast(e.target.value)} />*/}
                <DebounceInput
                    placeholder={"Search By Yeast..."}
                    value={search.searchByYeast}
                    minLength={1}
                    debounceTimeout={800}
                    type="text"
                    name="yeast"
                    onChange={inputEvent} />
            </div>
            {/* Search by Abv */}
            <div>
                <label>Search By Abv </label>
                {/*<input placeholder='Search By Abv...' value={searchByAbv} onChange={(e) => abvSearch(e)} />*/}
                {/*<input placeholder='Search By Abv...' value={searchByAbv} onChange={(e) => setSearchByAbv(e.target.value)} />*/}
                <DebounceInput
                    placeholder={"Search By Abv..."}
                    value={search.searchByAbv}
                    minLength={1}
                    debounceTimeout={800}
                    type="text"
                    name="searchByAbv"
                    onChange={inputEvent} />
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
                    <input placeholder='Pagination Per Page...' value={showPerPage === 25 ? "": showPerPage} onInput={(e) => pageDivider(e)} />
                    {/* <button type='button' onClick={(e) => getDivider(e)} > Get Beers Per Page </button> */}
                </div>
                <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={beer.length} />
            </div>
        </>
    )
}

export default GenericFunction