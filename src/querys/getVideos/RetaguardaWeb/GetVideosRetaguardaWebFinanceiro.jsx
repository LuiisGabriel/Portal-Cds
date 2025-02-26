import { gql } from "@apollo/client";

const getVideosRetaguardaWebFinanceiro = gql`
query getVideosRetaguardaWebFinanceiro {
  videos(first:999999, where: {modulo: "RetaguardaWeb", AND: {subModulo: "Financeiro"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosRetaguardaWebFinanceiro;