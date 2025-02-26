import { gql } from "@apollo/client";

const getUsuarioLogin = gql`

query getUsuarioLogin{
    usuario(where: {email: $email}) {
      nome
      email
      senha
    }
  }
`;

export default getUsuarioLogin;
