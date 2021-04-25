// import {makeExecutableSchema} from '@graphql-tools/schema';
// import {mergeTypeDefs, mergeResolvers} from '@graphql-tools/merge';
import {FastifyPluginAsync} from 'fastify';
// import mercurius from 'mercurius';
import {gql} from 'mercurius-codegen';

/**
 * Create instance of our Fastify server
 * We need to export it here so we can easily use it in our automated tests
 */
const UserResolver: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    /**
     * Type Definitions
     */
    const typeDefs = gql`
    extend type Query {
        """ Method to add two integers """
        add(
            " First integer "
            x: Int,
            " Second integer "
            y: Int
        ): Int
    }
    `;
    const typeDefs2 = gql`
    extend type Query {
        """ Method to substract two integers """
        sub(
            " First integer "
            x: Int,
            " Second integer "
            y: Int
        ): Int
    }
    `;
    /** ********* **/

    /**
    * Resolvers
    */
    const resolvers = {
        Query: {
            /**
             * Simple resolver to add two numbers
             * @param {object} _
             * @param {number} x  First number
             * @param {number} y Second number
             */
            add: async (_: unknown, {x, y}: { x: number, y: number }): Promise<number> => x + y,
        },
    };
    const resolvers2 = {
        Query: {
            /**
             * Simple resolver to subtract two numbers
             * @param {object} _
             * @param {number} x  First number
             * @param {number} y Second number
             */
            sub: async (_: unknown, {x, y}: { x: number, y: number }): Promise<number> => x - y,
        },
    };

    fastify.register(async (fastify) => {
        if (fastify.graphql) {
            fastify.graphql.extendSchema(typeDefs)
            fastify.graphql.extendSchema(typeDefs2)
            fastify.graphql.defineResolvers(resolvers)
            fastify.graphql.defineResolvers(resolvers2)
        }
    })
}


export default UserResolver;