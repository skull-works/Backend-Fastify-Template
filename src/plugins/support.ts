import fp from 'fastify-plugin';

export interface SupportPluginOptions {
  sample?: string;
}

// interface RegisterResolverParams {
//   fastify: FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyLoggerInstance>
//   schema: string;
//   resolvers: any;
// }

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<SupportPluginOptions>(async (fastify, opts) => {
  fastify.decorate('someSupport', () => {
    return 'hello world';
  });
});

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    someSupport(): string;
  }
}
