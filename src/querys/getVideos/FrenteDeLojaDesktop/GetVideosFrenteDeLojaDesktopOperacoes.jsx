import { gql } from "@apollo/client";

const getVideosFrenteDeLojaDesktopOperacoes = gql`
query getVideosFrenteDeLojaDesktopOperacoes {
  videos(where: {modulo: "FrenteDeLojaDesktop", AND: {subModulo: "Operacoes"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosFrenteDeLojaDesktopOperacoes;