import { gql } from 'mercurius-codegen';

const UserSchema = gql`
  extend type Query {
    """
    Hi Marco
    """
    hiMarco: String
  }
`;

export default UserSchema;
