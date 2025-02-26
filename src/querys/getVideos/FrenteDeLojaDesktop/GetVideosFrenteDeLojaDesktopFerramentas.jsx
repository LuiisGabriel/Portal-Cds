import { gql } from "@apollo/client";

const getVideosFrenteDeLojaDesktopFerramentas = gql`
query getVideosFrenteDeLojaDesktopFerramentas {
  videos(where: {modulo: "FrenteDeLojaDesktop", AND: {subModulo: "Ferramentas"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosFrenteDeLojaDesktopFerramentas;