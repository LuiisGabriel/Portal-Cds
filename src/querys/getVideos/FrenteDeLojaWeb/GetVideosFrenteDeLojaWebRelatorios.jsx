import { gql } from "@apollo/client";

const getVideosFrenteDeLojaWebRelatorios = gql`
query getVideosFrenteDeLojaWebRelatorios {
  videos(where: {modulo: "Frente De Loja Web", AND: {subModulo: "Relatorios"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosFrenteDeLojaWebRelatorios;