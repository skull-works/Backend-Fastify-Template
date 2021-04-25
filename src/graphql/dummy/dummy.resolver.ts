// import {makeExecutableSchema} from '@graphql-tools/schema';
// import {mergeTypeDefs, mergeResolvers} from '@graphql-tools/merge';
import {FastifyPluginAsync} from 'fastify';
// import mercurius from 'mercurius';
import {gql} from 'mercurius-codegen';

/**
 * Create instance of our Fastify server
 * We need to export it here so we can easily use it in our automated tests
 */
const DummyResolver: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

    const typeDefs = gql`
      extend type Query {
            """ Method to return simple message """
            simpleMessage(
                name: String
            ): String
        }
    `;

    const resolvers = {
        Query: {
            simpleMessage: async (_: unknown, { name }: { name: string }): Promise<string> =>  `Hi ${name}, this is to test graphql query if working`,
        },
    };

    fastify.register(async (fastify) => {
        if (fastify.graphql) {
            fastify.graphql.extendSchema(typeDefs)
            fastify.graphql.defineResolvers(resolvers)
        }
    })
    
}


export default DummyResolver;