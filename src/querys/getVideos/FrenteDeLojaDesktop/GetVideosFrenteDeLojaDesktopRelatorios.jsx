import { gql } from "@apollo/client";

const getVideosFrenteDeLojaDesktopRelatorios = gql`
query getVideosFrenteDeLojaDesktopRelatorios {
  videos(where: {modulo: "FrenteDeLojaDesktop", AND: {subModulo: "Relatorios"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosFrenteDeLojaDesktopRelatorios;