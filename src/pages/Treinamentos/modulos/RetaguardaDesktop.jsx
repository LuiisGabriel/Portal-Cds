import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { useQuery } from "@apollo/client";
import YouTube from 'react-youtube';
import getVideos from "../../../querys/Querys";


const RetaguardaDesktop = () => {
    const { loading, error, data } = useQuery(getVideos);
          
    if (loading) {
      return  <div>Loading...</div>
    }
  
    if (error) {
      return <div>an error occurred...</div>;
    }
    return(
        
        <>  
         <nav className="sticky top-0 z-50"><Navbar/></nav>
         
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Treinamentos</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-4 xl:gap-x-8">
          {data.videos.map((video) => (
            <a className="group">
              <YouTube videoId={video.videoId}/>
              <h3 className="mt-4 text-xl text-gray-700">{video.titulo}</h3>
             </a>
            
          ))}
        </div>
      </div>
    </div>
        </>
        
    )
}

export default RetaguardaDesktop