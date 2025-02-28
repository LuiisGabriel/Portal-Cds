import Navbar from "../../components/Navbar/Navbar";
import { useMutation, useQuery } from "@apollo/client";
import { React, useState } from "react";
import createNewVideo from "../../mutations/createNewVideo";
import publishNewVideo from "../../mutations/PublishVideo";
import getModulos from "../../querys/GetModulos"
import getSubModulos from "../../querys/GetSubModulos";


const NovoVideo = () => {

  const [formData, setFormData] = useState({
    titulo: '',
    modulo: '',
    subModulo: '',
    videoId: '',
  });

  const [createVideo] = useMutation(createNewVideo);
  const [publishVideo] = useMutation(publishNewVideo);

  const { subLoading, subError, subData } = useQuery(getSubModulos);

  if (subLoading) {
    return (
      <div role="status" className="m-70 ml-125">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
  if (subError) {
    return alert('Ocorreu um problema ao carregar os sub-módulos!!!');
  }

  const { loading, error, data } = useQuery(getModulos);


  if (loading) {
    return (
      <div role="status" className="m-70 ml-125">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  if (error) {
    return alert('Ocorreu um problema ao carregar os módulos!!!');
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { titulo, modulo, subModulo, videoId } = formData;

    createVideo({ variables: { titulo, modulo, subModulo, videoId } })


      .then((response) => {
        publishVideo({ variables: { videoId } })
        alert('Novo vídeo cadastrado com sucesso!!!')
      })
      .catch((error) => {
        alert('Erro ao cadastrar novo vídeo!')
      });
  };
  return (
    <>
      <nav className="sticky top-0 z-50"><Navbar /></nav>

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
              <label htmlFor="modulo" className="block text-sm/6 font-medium text-gray-900">
                Modulo
              </label>
            </div>
            <div className="mt-2">
              <select
                id="modulo"
                type="text"
                name="modulo"
                onChange={handleInputChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-800 sm:text-sm/6"
              >
                <option selected disabled>Selecione um módulo</option>
                {data.modulos.map((modulo) => (
                  <option
                    value={formData.modulo}
                  >
                    {modulo.nome}
                  </option>
                ))}
              </select>

            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="submodulo" className="block text-sm/6 font-medium text-gray-900">
                sub-modulo
              </label>
            </div>
            <div className="mt-2">
              <select
                id="subModulo"
                type="text"
                name="subModulo"
                onChange={handleInputChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-800 sm:text-sm/6"
              >
                <option selected disabled>Selecione um sub-módulo</option>
                {subData.subModulos.map((subModulo) => (
                  <option
                    value={formData.subModulo}
                  >
                    {subModulo.nome}
                  </option>
                ))}
              </select>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default NovoVideo