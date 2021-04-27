import { gql } from 'mercurius-codegen';


const AuthSchema = gql`
  input SignInInput {
      user: String!
      password: String!
  }

  extend type Mutation {
    """
    Method For Signing In
    """
    signIn(signInInput: SignInInput!): String
  }
`;

export default AuthSchema;
