import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import { useQuery } from "@apollo/client";
import YouTube from 'react-youtube';
import getVideosRetaguardaDesktopCadastros from '../../../../querys/getVideos/RetaguardaDesktop/GetVideosRetaguardaDesktopCadastros';


const RetaguardaDesktopCadastros = () => {
    const { loading, error, data } = useQuery(getVideosRetaguardaDesktopCadastros);

    if (loading) {
      return ( 
        
      <div role="status" className="m-70 ml-125">
      <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
  </div>
      )
    }
  
    if (error) {
      return alert('Ocorreu um problema ao carregar os vídeos!!!');
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
              <YouTube videoId={video.videoId} />
              <h3 className="mt-4 text-xl text-gray-700">{video.titulo}</h3>
             </a>
            
          ))}
        </div>
      </div>
    </div>
        </>
        
    )
}

export default RetaguardaDesktopCadastros