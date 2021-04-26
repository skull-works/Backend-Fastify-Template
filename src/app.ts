import { FastifyPluginAsync } from 'fastify';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import { join } from 'path';
import HeadRegistrar from './graphql/head.registrar';

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
  // This loads all plugins defined in plugins
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts,
  });

  // This loads all plugins defined in routes
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts,
  });

  // loads the head registrar for graphql modules
  fastify.register(HeadRegistrar);
};

export default app;
export { app };
