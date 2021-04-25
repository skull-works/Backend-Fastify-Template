import { FastifyPluginAsync } from "fastify"

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/hey', async function (request, reply) {
    fastify.log.info('Finally Working');
    return 'Marco'
  })
}

export default example;
