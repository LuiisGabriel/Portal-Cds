import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { useQuery } from "@apollo/client";
import getTreinamentos from '../../../querys/Querys2';

const RetaguardaWeb = () => {

      const { loading, error, data } = useQuery(getTreinamentos);
          
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
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.treinamentos.map((treinamento) => (
            <a className="group">
              <img
                alt={treinamento.alt}
                src={treinamento.imagem.url}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:scale-102 group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{treinamento.titulo}</h3>
             </a>
            
          ))}
        </div>
      </div>
    </div>
  </>
        
    )
}

export default RetaguardaWeb