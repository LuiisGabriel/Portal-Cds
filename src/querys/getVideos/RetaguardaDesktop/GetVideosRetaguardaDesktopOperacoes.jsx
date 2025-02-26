import { gql } from "@apollo/client";

const getVideosRetaguardaDesktopOperacoes = gql`
query getVideosRetaguardaDesktopOperacoes {
  videos(where: {modulo: "RetaguardaDesktop", AND: {subModulo: "Operacoes"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosRetaguardaDesktopOperacoes;