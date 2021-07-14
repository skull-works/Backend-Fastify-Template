import { FastifyPluginAsync } from 'fastify';
import privateRegistrar from './private-resolvers/private.registrar';
import publicRegistrar from './public-resolvers/public.registrar';

interface RegistrarOptions {
  sample?: string;
}

const HeadRegistrar: FastifyPluginAsync<RegistrarOptions> = async (fastify, opts): Promise<void> => {
  // Public Resolvers
  fastify.register(publicRegistrar);

  // Authenticated Resolvers
  fastify.register(privateRegistrar);
};

export default HeadRegistrar;
