import { gql } from "@apollo/client";

const getTreinamentos = gql`
query getTreinamentos {
  treinamentos {
    titulo
    alt
    imagem {
      url
    }
  }
}
`;



export default getTreinamentos;