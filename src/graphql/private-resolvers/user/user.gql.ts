import { gql } from 'mercurius-codegen';

const UserSchema = gql`
  extend type Query {
    """
    Method to add two integers
    """
    add(" First integer " x: Int, " Second integer " y: Int): Int
  }

  extend type Query {
    """
    Hi Marco
    """
    hiMarco: String
  }
`;

export default UserSchema;
