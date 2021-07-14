import { FastifyPluginAsync } from 'fastify';
import mercurius from 'mercurius';
import RegisterResolvers from '../plugins/register-resolvers.decor';
import AuthModule from './authentication/auth.module';
import HealthModule from './health/health.module';

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
    defineMutation: true,
  });

  // register modules
  fastify.register(HealthModule);
  fastify.register(AuthModule);
};

export default publicRegistrar;
