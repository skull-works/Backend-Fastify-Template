import { FastifyPluginAsync } from 'fastify';
import mercurius from 'mercurius';
import RegisterResolvers from '../plugins/register-resolvers.decor';
import UserResolver from './user/user.module';

const privateEndpoint = process.env.PRIVATE_ENDPOINT || 'private';

type RegistrarOptions = {
  sample?: string;
};

const privateRegistrar: FastifyPluginAsync<RegistrarOptions> = async (fastify, opts): Promise<void> => {
  // load plugins under graphql folder
  fastify.register(RegisterResolvers);

  // load graphql instance
  fastify.register(mercurius, {
    prefix: privateEndpoint,
  });

  // middlewares
  fastify.addHook('preParsing', async (req, res) => {
    fastify.log.info('Authentication Checking');
  });

  // register resolvers
  fastify.register(UserResolver);
};

export default privateRegistrar;
