import { FastifyPluginAsync } from 'fastify';

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/hey', async function (request, reply) {
    fastify.log.info('Finally Working');
    return 'Hello World';
  });
};

export default example;
