import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination';

const Beer = () => {
  const [beer, setBeer] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  // const [test, setTest] = useState([]);
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

  // useEffect(() => {
  //   axios.get('/api/v1/beers')
  //       .then(resp => {
  //         setBeer(resp.data.beers)
  //         console.log('axios => beer =>', beer)
  //         setSearchApiData(resp.data.beers)
  //         console.log('axios => searchApiData =>', searchApiData)
  //
  //       })
  // }, [])

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
          "/api/v1/beers"
      );
      setBeer(data.data.beers);
      setSearchApiData(data.data.beers)
    };
    getData();
  }, []);

  // console.log("beer: ", beer);
  // console.log("searchApiData: ", searchApiData);

useEffect(()=>{
  // console.log(search)
  setValues();
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



  const inputEvent = (event)=>{
    // console.log(event)
    const {value , name}= event.target;
    // console.log(name,value ,"Event")
    setSearch({
        ...search,
        [name]: value,
    })
    // if (name === ''){
    //   console.log(`undefined portion is running`)
    //
    // }
    // else
    // setBeer(searchApiData);
    // if (name === "name" || name === "first_brewed") {
    //   const filterResult = beer.filter(beer => beer[`${name}`].toLowerCase().includes(value.toLowerCase()))
    //   setBeer(filterResult)
    //   console.log(filterResult)
    // } else if (name ==="yeast") {
    //   const filterResult = beer.filter(beer => beer.ingredients[`${name}`].toLowerCase().includes(value.toLowerCase()))
    //   setBeer(filterResult)
    //   console.log(filterResult)
    // } else if (name === "abv") {
    //   const filterResult = beer.filter(beer => beer[`${name}`] >= value)
    //   setBeer(filterResult)
    //   console.log(filterResult)
    // } else if (name == "id") {
    //   const filterResult = searchApiData.filter(beer => beer[`${name}`] == value)
    //   setBeer(filterResult)
    // } else {
    //   console.log(`else ending....`)
    //   // setBeer(searchApiData)
    // }
  }


  const setValues=async ()=>{
    let beer;
    const data = await axios.get(
        "/api/v1/beers"
    ).then((e)=>{
      beer=e.data.beers;
    });
    // console.log("setValues => ",beer)
    // let name11='';
    // let abv11='';
    // let yeast11='';
    // let first_brewed11='';
    // let id11='';

    if(search.name !== ''){
      // console.log('input name => ',search.name)
      // name11=search.name;
      const filterResult = beer.filter(({name}) => name.toLowerCase().includes(search.name.toLowerCase()))
      beer=filterResult;
      // console.log("beer => ",beer)
      setBeer(filterResult)
    }

    // if(search.name !== ''){
    //   // console.log('input name => ',search.name)
    //   name11=search.name;
    //     const filterResult = beer.filter(({name}) => name.toLowerCase().includes(name11?.toLowerCase()))
    //   beer=filterResult;
    //   // console.log("beer => ",beer)
    //   setBeer(filterResult)
    // }

    if(search.first_brewed !== ''){
      // console.log('input name => ',search.first_brewed)
      // first_brewed11=search.first_brewed;
      const filterResult = beer.filter(({first_brewed}) => first_brewed.toLowerCase().includes(search.first_brewed.toLowerCase()))
      beer=filterResult;
      // console.log("beer => ",beer)
      setBeer(filterResult)
    }
    if(search.abv!==''){
      // console.log(search.abv)
      // abv11=search.abv;
      const filterResult = beer.filter(({abv}) => abv >= search.abv)
      beer=filterResult;
      // console.log(beer)
      setBeer(filterResult)
    }
    if(search.yeast!==''){
      // yeast11=search.yeast;
        const filterResult = beer.filter(({ingredients}) => ingredients.yeast.toLowerCase().includes(search.yeast.toLowerCase()))
      // console.log('yeast', yeast11)
      beer=filterResult;
      // console.log(beer)
      setBeer(filterResult)
    }
    if(search.id!==''){
      // id11=search.id;
        const filterResult = beer.filter(({id}) => id == search.id)
      // console.log('yeast', id11)
      beer=filterResult;
      // console.log(beer)
      setBeer(filterResult)
    }
    // if (search.id === '' && search.name === '' && search.first_brewed === '' && search.yeast === '' && search.abv === ''){
    //   setBeer(searchApiData)
    // }
  }



    // const inputEvent = (event)=>{
    //   const {value , name}= event.target;
    //   setSearch({
    //     ...search,
    //     [name]: value,
    //   })
    //   if (name === undefined){
    //     setBeer(searchApiData)
    //   }else
    //   if (name === "yeast") {
    //     const filterResult = beer.filter(beer => beer.ingredients[`${name}`].toLowerCase().includes(value.toLowerCase()))
    //     setBeer(filterResult)
    //     console.log(filterResult)
    //   }else{
    //     const filterResult = beer.filter(beer => beer[`${name}`].toLowerCase().includes(value.toLowerCase()))
    //     setBeer(filterResult)
    //     console.log(filterResult)
    //   }
    // }


  // const inputEvent = (event)=>{
  //   const {value , name}= event.target;
  //   setSearch({
  //     ...search,
  //     [name]: value,
  //   })
  //   if (name === undefined){
  //     setBeer(searchApiData)
  //   }else if (name === "yeast") {
  //     console.log('name is => ', name)
  //     console.log('value is => ', value)
  //     console.log('Event is => ', event)
  //     const filterResult = beer.filter(beer => beer.ingredients[`${name}`].toLowerCase().includes(value.toLowerCase()))
  //     setBeer(filterResult)
  //     console.log(filterResult)
  //   }else{
  //     console.log('name is => ', name)
  //     console.log('value is => ', value)
  //     const filterResult = beer.filter(beer => beer[`${name}`].toLowerCase().includes(value.toLowerCase()))
  //     setBeer(filterResult)
  //     console.log(filterResult)
  //   }
  // }


  // Search By generic function

  // const inputEvent = (event)=>{
  //   const {value , name}= event.target;
  //   setSearch({
  //     ...search,
  //     [name]: value,
  //   })
  //   if (name === undefined){
  //     setBeer(searchApiData)
  //   }else if (name === "yeast") {
  //     const filterResult = beer.filter(beer => beer.ingredients[`${name}`].toLowerCase().includes(value.toLowerCase()))
  //     setBeer(filterResult)
  //     console.log(filterResult)
  //   }else{
  //     const filterResult = beer.filter(beer => beer[`${name}`].toLowerCase().includes(value.toLowerCase()))
  //     setBeer(filterResult)
  //     console.log(filterResult)
  //   }
  // }

  // const inputEvent1 = (event)=>{
  //   const {value , name}= event.target;
  //   setSearch({
  //     ...search,
  //     [name]: value,
  //   })
  //   if (name === undefined){
  //     setBeer(searchApiData)
  //   }else if (name === "id") {
  //     const filterResult = searchApiData.filter(beer => beer[`${name}`] == value)
  //     setBeer(filterResult)
  //     console.log(filterResult)
  //
  //   }else{
  //     const filterResult = searchApiData.filter(beer => beer[`${name}`] >= value)
  //     setBeer(filterResult)
  //     console.log(filterResult)
  //
  //   }
  // }



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
      <h2>Total Number Of beers {beer.length}</h2>

      {/* Search by Id */}
      <div>
          <label>Search By Id </label>
          <input
              placeholder={"Search By Id..."}
              value={search.id}
              minLength={1}
              // debounceTimeout={800}
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
              minLength={1}
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
              minLength={1}
              // debounceTimeout={800}
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
              minLength={1}
              // debounceTimeout={800}
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
              minLength={1}
              // debounceTimeout={800}
              type="text"
              name="abv"
              onChange={(event) => {
                inputEvent(event)
              }} />
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