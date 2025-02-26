import { gql } from "@apollo/client";

const getVideosRetaguardaDesktopOperacoes = gql`
query getVideosRetaguardaDesktopOperacoes {
  videos(where: {modulo: "Retaguarda Desktop", AND: {subModulo: "Operacoes"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosRetaguardaDesktopOperacoes;