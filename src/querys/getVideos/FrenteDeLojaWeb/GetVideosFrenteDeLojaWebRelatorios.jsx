import { gql } from "@apollo/client";

const getVideosFrenteDeLojaWebRelatorios = gql`
query getVideosFrenteDeLojaWebRelatorios {
  videos(where: {modulo: "FrenteDeLojaWeb", AND: {subModulo: "Relatorios"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosFrenteDeLojaWebRelatorios;