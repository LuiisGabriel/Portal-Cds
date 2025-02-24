import { gql } from "@apollo/client";

const getUsuarioLogin = gql`

query getUsuarioLogin($email: String!){
    usuario(where: {email: $email}) {
      nome
      email
      senha
    }
  }
`;

export default getUsuarioLogin;
