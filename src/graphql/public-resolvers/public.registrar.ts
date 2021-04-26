import { FastifyPluginAsync } from 'fastify';
import mercurius from 'mercurius';
import RegisterResolvers from '../plugins/register-resolvers.decor';
import DummyModule from './dummy/dummy.module';

const publicEndpoint = process.env.PUBLIC_ENDPOINT || 'public';

interface RegistrarOptions {
  sample?: string;
}

const publicRegistrar: FastifyPluginAsync<RegistrarOptions> = async (fastify, opts): Promise<void> => {
  // load plugins under graphql folder
  fastify.register(RegisterResolvers);

  // initialize graphql instance
  fastify.register(mercurius, {
    prefix: publicEndpoint,
  });

  fastify.register(DummyModule);
};

export default publicRegistrar;
