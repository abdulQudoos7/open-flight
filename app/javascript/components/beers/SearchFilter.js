import React, {useEffect, useState} from "react";
import axios from "axios";
import {DebounceInput} from "react-debounce-input";

const SearchFilter = () => {
    // const [beer, setBeer] = useState([]);
    // const [searchApiData, setSearchApiData] = useState([]);
    // const [search, setSearch] = useState({
    //     id : "",
    //     name : "",
    //     first_brewed : "",
    //     yeast : "",
    //     abv : "",
    // })
    //
    //
    // useEffect(()=>{
    //     const getData = async () =>{
    //         const data = await axios.get('/api/v1/beers');
    //         setBeer(data.data.beers)
    //         setSearchApiData(data.data.beers)
    //     };
    //     getData();
    // },[])
    // console.log("beer => ",beer)
    // console.log("searchApiData => ",searchApiData)
    //
    // const inputEvent = (event)=>{
    //     console.log(event)
    //     const {value , name}= event.target;
    //     console.log(name,value ,"Event")
    //     setSearch({
    //         ...search,
    //         [name]: value,
    //     })
    // }
    //
    // useEffect(()=>{
    //     console.log(search)
    //     setValues();
    // },[search])
    //
    //
    // const setValues = () => {
    //     console.log(beer)
    // }
    //
    //
    //
    // return(
    //     <>
    //
    //         <style>{`
    // table, tr, th, td{
    //     border:1px solid black;
    // }
    // img{
    //     width: 50px;
    //     height: 115px;
    // }
    // `}
    //         </style>
    //
    //
    //         <h1>SearchFilter</h1>
    //
    //         {/* Search by Id */}
    //         <div>
    //             <label>Search By Id </label>
    //             <DebounceInput
    //                 placeholder={"Search By Id..."}
    //                 value={search.id}
    //                 minLength={1}
    //                 debounceTimeout={800}
    //                 type="number"
    //                 name="id"
    //                 onChange={inputEvent} />
    //         </div>
    //         {/* Search by name */}
    //         <div>
    //             <label>Search By Name </label>
    //             <DebounceInput
    //                 placeholder={"Search By Name..."}
    //                 value={search.name}
    //                 minLength={1}
    //                 debounceTimeout={800}
    //                 type="text"
    //                 name="name"
    //                 onChange={inputEvent} />
    //         </div>
    //         {/* Search by FirstBrewed */}
    //         <div>
    //             <label>Search By First-Brewed </label>
    //             <DebounceInput
    //                 placeholder={"Search By First-Brewed..."}
    //                 value={search.first_brewed}
    //                 minLength={1}
    //                 debounceTimeout={800}
    //                 type="text"
    //                 name="first_brewed"
    //                 onChange={inputEvent} />
    //         </div>
    //         {/* Search by Yeast */}
    //         <div>
    //             <label>Search By Yeast </label>
    //             <DebounceInput
    //                 placeholder={"Search By Yeast..."}
    //                 value={search.yeast}
    //                 minLength={1}
    //                 debounceTimeout={800}
    //                 type="text"
    //                 name="yeast"
    //                 onChange={inputEvent} />
    //         </div>
    //         {/* Search by Abv */}
    //         <div>
    //             <label>Search By Abv </label>
    //             <DebounceInput
    //                 placeholder={"Search By Abv..."}
    //                 value={search.abv}
    //                 minLength={1}
    //                 debounceTimeout={800}
    //                 type="text"
    //                 name="abv"
    //                 onChange={inputEvent} />
    //         </div>
    //
    //
    //         <table>
    //             <thead>
    //             <tr>
    //                 <th>Id</th>
    //                 <th>Name</th>
    //                 <th>TagLine</th>
    //                 <th>First Brewed</th>
    //                 <th>Description</th>
    //                 <th>Abv</th>
    //                 <th>Yeast</th>
    //                 <th>Images</th>
    //             </tr>
    //             </thead>
    //             <tbody>
    //                 {searchApiData && searchApiData.map(({ id, name, tagline, first_brewed, description, abv, ingredients: { yeast }, image_url }, index) =>
    //                     <tr key={`beers-${index}`}>
    //                         <td >{id}</td>
    //                         <td >{name}</td>
    //                         <td >{tagline}</td>
    //                         <td >{first_brewed}</td>
    //                         <td >{description}</td>
    //                         <td >{abv}</td>
    //                         <td >{yeast}</td>
    //                         <td ><img src={image_url} /></td>
    //                     </tr>
    //                 )}
    //             </tbody>
    //         </table>
    //
    //     </>
    // )
}

export default SearchFilter