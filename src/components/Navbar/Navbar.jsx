import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
    <>
        <nav>
        
        <ul class="list">
        <li>
        <Link to= "/Videos" >Vídeos</Link>
        </li>
        <li>
        <Link to= "/" >Página inicial</Link>
        </li>
        </ul>
        </nav>
    </>
    )
}

export default Navbar