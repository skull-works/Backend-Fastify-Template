import { FastifyPluginAsync } from 'fastify';
import HealthSchema from './health.gql';
import HealthResolvers from './health.resolver';

const DummyModule: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.registerResolvers({
    fastify,
    schema: HealthSchema,
    resolvers: HealthResolvers(fastify),
  });
};

export default DummyModule;
