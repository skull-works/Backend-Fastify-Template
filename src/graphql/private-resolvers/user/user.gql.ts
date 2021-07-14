import { gql } from 'mercurius-codegen';

const UserSchema = gql`
  extend type Query {
    """
    Method that returns greeting to user
    """
    hiUser: String
  }
`;

export default UserSchema;
