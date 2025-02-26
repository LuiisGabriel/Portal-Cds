import { gql } from "@apollo/client";

const getVideosFrenteDeLojaWebOperacoes = gql`
query getVideosFrenteDeLojaWebOperacoes {
  videos(where: {modulo: "FrenteDeLojaWeb", AND: {subModulo: "Operacoes"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosFrenteDeLojaWebOperacoes;