import { gql } from "@apollo/client";

const getVideosRetaguardaDesktopCadastros = gql`
query getVideosRetaguardaDesktopCadastros {
  videos(where: {modulo: "RetaguardaDesktop", AND: {subModulo: "Cadastros"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosRetaguardaDesktopCadastros;