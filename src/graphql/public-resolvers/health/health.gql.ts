import { gql } from 'mercurius-codegen';

const HealthSchema = gql`
  extend type Query {
    """
    Method for health check
    """
    healthCheck(name: String): String
  }
`;

export default HealthSchema;
