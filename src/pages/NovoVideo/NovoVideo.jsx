import React from "react"
import Navbar from "../../components/Navbar/Navbar";
import { useMutation } from "@apollo/client";


const NovoVideo = () => {
    return (
      <>
      <nav className="sticky top-0 z-50"><Navbar/></nav>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="titulo" className="block text-sm/6 font-medium text-gray-900">
                  Título
                </label>
                <div className="mt-2">
                  <input
                    id="titulo"
                    name="titulo"
                    type="titulo"
                    required
                    autoComplete="titulo"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
                <div className="flex items-center justify-between">
                  <label htmlFor="slug" className="block text-sm/6 font-medium text-gray-900">
                    Slug
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="slug"
                    name="slug"
                    type="slug"
                    required
                    autoComplete="slug"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label htmlFor="videoId" className="block text-sm/6 font-medium text-gray-900">
                    VideoId
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="videoId"
                    name="videoId"
                    type="videoId"
                    required
                    autoComplete="videoId"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cadastrar Video
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  
  export default NovoVideo