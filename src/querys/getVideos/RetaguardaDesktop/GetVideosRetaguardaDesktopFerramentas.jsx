import { gql } from "@apollo/client";

const getVideosRetaguardaDesktopFerramentas = gql`
query getVideosRetaguardaDesktopFerramentas {
  videos(where: {modulo: "RetaguardaDesktop", AND: {subModulo: "Ferramentas"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosRetaguardaDesktopFerramentas;