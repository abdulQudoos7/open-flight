import React from "react";
import { Route, Routes} from 'react-router-dom'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'
import Home from "./Home/Home";
import Beer from "./beers/Beer";
// import Date from "./beers/Test";
import HooksPractise from "./Home/HooksPractise";
import Test from "./beers/Test";
import SearchFilter from "./beers/SearchFilter";


const App = () => {
  return (
    <>
      <Home/>
    {/* <Date/> */}
    {/*  <Beer/>*/}
    {/*  <SearchFilter/>*/}
    {/*  <HooksPractise />*/}
    {/* <Link to={"/airline"}>Airline</Link><br></br>
    <Link to={"/airlines"}>Airlines</Link> */}

    <Routes>
      {/*<Route path="/" element={<Airlines />} />*/}
      {/*<Route path="/airline/:slug" element={<Airline />}/>*/}
    </Routes>
    </>
  )
}

export default App