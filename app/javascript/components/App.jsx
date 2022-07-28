import React from "react";
import { Route, Routes} from 'react-router-dom'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'
import Home from "./Home/Home";

const App = () => {
  return (
    <>
    <Home/>
    {/* <Link to={"/airline"}>Airline</Link><br></br>
    <Link to={"/airlines"}>Airlines</Link> */}

    <Routes>
      <Route path="/" element={<Airlines />} />
      <Route path="/airline/:slug" element={<Airline />}/>
    </Routes>
    </>
  )
}

export default App