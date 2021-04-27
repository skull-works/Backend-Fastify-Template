import { FastifyPluginAsync } from 'fastify';
import mercurius from 'mercurius';
import RegisterResolvers from '../plugins/register-resolvers.decor';
import UserModule from './user/user.module';

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
    const token = req.headers.authorization?.split(' ')[1];
    if (token !== 'SampleToken123') res.status(403).send('Not authorized');
  });

  // register resolvers
  fastify.register(UserModule);
};

export default privateRegistrar;
