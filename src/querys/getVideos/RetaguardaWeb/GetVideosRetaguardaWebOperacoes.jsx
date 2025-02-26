import { gql } from "@apollo/client";

const getVideosRetaguardaWebOperacoes = gql`
query getVideosRetaguardaWebOperacoes {
  videos(first:999999, where: {modulo: "Retaguarda Web", AND: {subModulo: "Operacoes"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;

export default getVideosRetaguardaWebOperacoes;