import React from "react";
import {Link} from 'react-router-dom'
import Navbar from "../../components/navbar/Navbar";
import Navbar2 from '../../components/Navbar2/Navbar2';
import YouTube from 'react-youtube';


const Videos = () => {
    return(
     
        <>
            <Navbar2/>
            <YouTube videoId="cGdZFsR5DsM?si=jj_xHnwZpib4Xflk"/>
            <h2>Título</h2>
            <div>
                <h3>asad</h3>
                <h3>asad</h3>
            </div>
            <YouTube videoId="AAggVUFf9A8?si=xCX7LfJwJwX4Qlgx"/>
            <h2>Título</h2>
            <YouTube videoId="9NjJvQF9CBs?si=rBzC3mJvjQT4XJjs"/>
            <h2>Título</h2>

        </>
     
    )
}

export default Videos