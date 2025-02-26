import { gql } from "@apollo/client";

const getVideosRetaguardaWebCadastros = gql`
query getVideosRetaguardaWebCadastros {
  videos(where: {modulo: "RetaguardaWeb", AND: {subModulo: "Cadastros"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosRetaguardaWebCadastros;