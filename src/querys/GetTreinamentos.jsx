import { gql } from "@apollo/client";

const getTreinamentos = gql`
query getTreinamentos {
  treinamentos(first: 999999) {
    titulo
    alt
    imagem {
      url
    }
  }
}
`;



export default getTreinamentos;