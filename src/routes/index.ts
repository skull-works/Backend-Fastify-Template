import { FastifyPluginAsync } from 'fastify';

const healthCheck: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.decorateRequest('service', 'be-fastify-template');

  fastify.get('/health', async function (req: any, _reply) {
    return { 
      api: 'Primary Health Check', 
      status: 'Active', 
      healthStatus: 'Healthy', 
      service: req.service,
      secondary: req.secondary
    };
  });

  fastify.register(async function innerContext (innerFastify) {
    innerFastify.decorateRequest('secondary', 'secondary context')
    
    innerFastify.get('/health/secondary', async function (req: any, _reply) {
      return { 
        api: 'Secondary Health Check', 
        status: 'Active', 
        healthStatus: 'Healthy', 
        service: req.service,
        secondary: req.secondary
      };
    })
  })
};

export default healthCheck;
