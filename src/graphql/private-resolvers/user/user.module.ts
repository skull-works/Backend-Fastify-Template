import {FastifyPluginAsync} from 'fastify';
import UserResolver from './user.resolver';
import UserSchema from './user.gql';

const UserModule: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.registerResolvers({
        fastify,
        schema: UserSchema,
        resolvers: UserResolver
    })
}


export default UserModule;