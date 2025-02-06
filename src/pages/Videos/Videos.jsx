import React from "react";
import {Link} from 'react-router-dom'
import Navbar from "../../components/navbar/Navbar";
import YouTube from 'react-youtube';


const Videos = () => {
    return(
     
        <>
        <h1>Vídeos</h1>
            <Navbar />
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