import React from "react";
import {Routes,Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Treinamentos from "./pages/Treinamentos/Treinamentos"
import Avaliacoes from "./pages/Avaliacoes/Avaliacoes";
import SobreNos from "./pages/SobreNos/SobreNos";
import Perfil from "./pages/Perfil/Perfil";

const AppRoutes = () =>{

    return (
        <Routes>
        <Route path= '/' element = {<LandingPage/>}/>
        <Route path= '/Treinamentos' element = {<Treinamentos/>}/>
        <Route path= '/Avaliacoes' element = {<Avaliacoes/>}/>
        <Route path= '/SobreNos' element = {<SobreNos/>}/>
        <Route path= '/Perfil' element = {<Perfil/>}/>
        </Routes>
        
    )
}

export default AppRoutes