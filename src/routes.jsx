import React from "react";
import {Routes,Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Treinamentos from "./pages/Treinamentos/Treinamentos"
import Avaliacoes from "./pages/Avaliacoes/Avaliacoes";
import SobreNos from "./pages/SobreNos/SobreNos";
import Perfil from "./pages/Perfil/Perfil";
import FrenteDeLojaDesktop from "./pages/Treinamentos/modulos/FrenteDeLojaDesktop";
import FrenteDeLojaWeb from "./pages/Treinamentos/modulos/FrenteDeLojaWeb";
import RetaguardaDesktop from "./pages/Treinamentos/modulos/RetaguardaDesktop";
import RetaguardaWeb from "./pages/Treinamentos/modulos/RetaguardaWeb";
import NovoVideo from "./pages/NovoVideo/NovoVideo";
import Teste from "./pages/teste";



const AppRoutes = () =>{

    return (
        <Routes>
        <Route path= '/' element = {<LandingPage/>}/>
        <Route path= '/Treinamentos' element = {<Treinamentos/>}/>
        <Route path= '/Avaliacoes' element = {<Avaliacoes/>}/>
        <Route path= '/SobreNos' element = {<SobreNos/>}/>
        <Route path= '/Perfil' element = {<Perfil/>}/>
        <Route path= '/FrenteDeLojaDesktop' element = {<FrenteDeLojaDesktop/>}/>
        <Route path= '/FrenteDeLojaWeb' element = {<FrenteDeLojaWeb/>}/>
        <Route path= '/RetaguardaDesktop' element = {<RetaguardaDesktop/>}/>
        <Route path= '/RetaguardaWeb' element = {<RetaguardaWeb/>}/>
        <Route path= '/NovoVideo' element = {<NovoVideo/>}/>
        <Route path= '/Teste' element = {<Teste/>}/>
        </Routes>
        
    )
}

export default AppRoutes