import { Instance } from '../../interface/interface';

const HealthResolvers = (fastify: Instance) => {
  const Query = {
    healthCheck: async (_: unknown, { name }: { name: string }): Promise<string> => {
      fastify.log.info(`Running Health Check for user ${name}`);
      return `Hi ${name}, this application is running healthy`;
    },
  };

  return { Query };
};

export default HealthResolvers;
