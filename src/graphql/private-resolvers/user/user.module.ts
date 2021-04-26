import { FastifyPluginAsync } from 'fastify';
import UserSchema from './user.gql';
import UserResolver from './user.resolver';

const UserModule: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.registerResolvers({
    fastify,
    schema: UserSchema,
    resolvers: UserResolver,
  });
};

export default UserModule;
