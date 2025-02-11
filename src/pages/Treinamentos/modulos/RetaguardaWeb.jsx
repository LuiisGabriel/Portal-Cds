import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { useQuery } from "@apollo/client";

import INFO_PERSON from "../../../querys/Querys";

const RetaguardaWeb = () => {

      const { loading, error, data } = useQuery(INFO_PERSON);
          
      if (loading) {
        return <div className="lg: mx-w-2xs">
           <div className="bg-gray-700">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-3xs lg:px-8">Loading...</div>
        </div>
        </div>;
       
        
      }
    
      if (error) {
        return <div>an error occurred...</div>;
      }

    return(
        
        <>  
      <nav className="sticky top-0 z-50"><Navbar/></nav>
         
      <div className="bg-white">
      <div className="mx-left max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-3xs lg:px-8">
        <h2 className="sr-only">RetaguardaWeb</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-4 xl:gap-x-8">
        {data.characters.results.map((person) => (
            <a key={person.name} className="group">
              <img
                src={person.image}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{person.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
        </>
        
    )
}

export default RetaguardaWeb