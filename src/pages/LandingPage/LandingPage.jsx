import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import BemVindo from '../../components/BemVindo/BemVindo';
import Imagem1 from '../../images/imagemCds1.jpg'


const LandingPage = () => {
    return(
        
        <>  
         <nav className="sticky top-0 z-50"><Navbar/></nav>
         <div> <BemVindo/> </div>


         <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Aqui você vai encontrar tudo oque precisa saber sobre a CDS!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Servir nossos clientes é nossa meta diária e os posicionamos no centro de tudo que fazemos. Nosso objetivo é exceder suas expectativas oferecendo agilidade e precisão nas suas solicitações. Acompanhar a eficiência de nossos atendimentos faz parte de nossa rotina através de pesquisas que avaliam o nível de satisfação de nossos usuários.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt=""
                          src={Imagem1}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Imagem1}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Imagem1}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Imagem1}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Imagem1}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Imagem1}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Imagem1}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/Treinamentos"
                className="inline-block rounded-md border border-transparent bg-gray-800 px-8 py-3 text-center font-medium text-white hover:bg-gray-600"
              >
                Começe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

        </>
        
    )
}

export default LandingPage