import { FastifyInstance, FastifyLoggerInstance } from 'fastify';
import fp from 'fastify-plugin';
import { IncomingMessage, Server, ServerResponse } from 'node:http';

interface PluginOptions {
  sample?: string;
}

interface RegisterResolverParams {
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyLoggerInstance>;
  schema: string;
  resolvers: any;
}

export default fp<PluginOptions>(async (fastify, opts) => {
  fastify.decorate('registerResolvers', (inputs: RegisterResolverParams) => {
    // tslint:disable
    const { fastify, schema, resolvers } = inputs;
    fastify.register(async (app) => {
      if (app.graphql) {
        app.graphql.extendSchema(schema);
        app.graphql.defineResolvers(resolvers);
      }
    });
  });
});

declare module 'fastify' {
  export interface FastifyInstance {
    registerResolvers(inputs: RegisterResolverParams): void;
  }
}
