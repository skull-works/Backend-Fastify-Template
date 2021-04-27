import { FastifyPluginAsync } from 'fastify';
import AuthSchema from './auth.gql';
import AuthResolvers from './auth.resolver';

const AuthModule: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.registerResolvers({
    fastify,
    schema: AuthSchema,
    resolvers: AuthResolvers(fastify),
  });
};

export default AuthModule;
