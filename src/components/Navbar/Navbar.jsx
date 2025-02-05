import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        
         <>   
        <h1>Página inicial</h1>
        <nav>
        <ul>
        <li>
        <Link to= "./Videos" >Vídeos</Link>
        </li>
        </ul>
        </nav>
        </>
        
    )
}

export default Navbar