import { Server, IncomingMessage, ServerResponse } from 'node:http';
import { FastifyInstance, FastifyLoggerInstance } from 'fastify';
import fp from 'fastify-plugin';

interface PluginOptions {
  sample?: string;
}

interface RegisterResolverParams {
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyLoggerInstance>
  schema: string;
  resolvers: any; 
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<PluginOptions>(async (fastify, opts) => {

  fastify.decorate('registerResolvers', (inputs: RegisterResolverParams) => {
    const { fastify, schema, resolvers } = inputs;
    fastify.register(async (fastify) => {
        if (fastify.graphql) {
            fastify.graphql.extendSchema(schema)
            fastify.graphql.defineResolvers(resolvers)
        }
    })
  });
});

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    registerResolvers(inputs: RegisterResolverParams): void;
  }
}
