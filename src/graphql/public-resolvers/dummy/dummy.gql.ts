import { gql } from 'mercurius-codegen';

const DummySchema = gql`
  extend type Query {
    """
    Method to return simple message
    """
    simpleMessage(name: String): String
  }
`;

export default DummySchema;
