import { gql } from "@apollo/client";

const getVideosRetaguardaDesktopFinanceiro = gql`
query getVideosRetaguardaDesktopFinanceiro {
  videos(where: {modulo: "RetaguardaDesktop", AND: {subModulo: "Financeiro"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosRetaguardaDesktopFinanceiro;