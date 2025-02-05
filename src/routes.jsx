import React from "react";
import {Routes,Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Videos from "./pages/Videos/Videos"

const AppRoutes = () =>{

    return (
        <Routes>
        <Route path= '/' element = {<LandingPage/>}  />
        <Route path= '/Videos' element = {<Videos/>}  />
        </Routes>
        
    )
}

export default AppRoutes