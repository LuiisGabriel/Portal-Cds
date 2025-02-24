import Navbar from "../../components/Navbar/Navbar";
import { useMutation} from "@apollo/client";
import { React,useState } from "react";
import createNewVideo from "../../mutations/createNewVideo";
import publishNewVideo from "../../mutations/PublishVideo";

const NovoVideo = () => {

  const [formData, setFormData] = useState({
    titulo: '',
    slug: '',
    videoId: '',
  });

  const [createVideo] = useMutation(createNewVideo);
  const [publishVideo] = useMutation(publishNewVideo);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { titulo, slug, videoId } = formData;

    createVideo({ variables: {titulo, slug, videoId } })


      .then((response) => {
        publishVideo({variables: {slug}})
        alert('Novo vídeo cadastrado com sucesso!!!')
      })
      .catch((error) => {
        alert('Erro ao cadastrar novo vídeo!')
      });
  };


    return (
      <>
      <nav className="sticky top-0 z-50"><Navbar/></nav>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="titulo" className="block text-sm/6 font-medium text-gray-900">
                  Título
                </label>
                <div className="mt-2">
                  <input
                     id="titulo"
                     type="text" 
                     name="titulo" 
                     value={formData.titulo} 
                     onChange={handleInputChange}
                     required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-800 sm:text-sm/6"
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
                     type="text" 
                     name="slug" 
                     value={formData.slug} 
                     onChange={handleInputChange}
                     required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-800 sm:text-sm/6"
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
                     type="text" 
                     name="videoId" 
                     value={formData.videoId} 
                     onChange={handleInputChange}
                     required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-800 sm:text-sm/6"
                  />
                </div>
              
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cadastrar Video
                </button>
              </div>
            </form>
            <div>
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default NovoVideo