import {FastifyPluginAsync} from 'fastify';
import DummySchema from './dummy.gql';
import DummyResolvers from './dummy.resolver';

const DummyModule: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.registerResolvers({
        fastify,
        schema: DummySchema,
        resolvers: DummyResolvers
    })
}

export default DummyModule;