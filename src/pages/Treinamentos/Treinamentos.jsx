import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import YouTube from 'react-youtube';


const treinamentos = [
    {
      id: 1,
      name: 'Retaguarda WEB - Cadastros / Funcionários',
      href: '#',
      imageSrc: '',
      imageAlt: 'Retaguarda WEB - Cadastros / Funcionários',
    },
    {
      id: 2,
      name: 'Retaguarda WEB - Operações / Recebimento de Produtos',
      href: '#',
      imageSrc: '',
      imageAlt: 'Retaguarda WEB - Operações / Recebimento de Produtos',
    },
    {
      id: 3,
      name: 'CDS Web - Financeiro / Baixa e Estorno de Contas a Receber',
      href: '#',
      imageSrc: '',
      imageAlt: 'CDS Web - Financeiro / Baixa e Estorno de Contas a Receber',
    },
    {
      id: 4,
      name: 'CDS Web / Frente de Loja / Operações / Emissão de NFC-e',
      href: '#',
      imageSrc: '',
      imageAlt: 'CDS Web / Frente de Loja / Operações / Emissão de NFC-e',
    },
    {
        id: 5,
        name: 'Consulta de Relatório de Vendas - Histórico dos Produtos',
        href: '#',
        imageSrc: '',
        imageAlt: 'Consulta de Relatório de Vendas - Histórico dos Produtos',
      },
 
  ]


const Treinamentos = () => {
    return(
     
        <>
            <Navbar/>

            <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Treinamentos</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {treinamentos.map((treinamento) => (
            <a key={treinamento.id} href={treinamento.href} className="group">
              <img
                alt={treinamento.imageAlt}
                src={treinamento.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{treinamento.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
        </>
   //<p className="mt-1 text-lg font-medium text-gray-900">{treinamento.price}</p>
     
    )
}

export default Treinamentos