import { Instance } from '../../interface/interface';

const DummyResolvers = (fastify: Instance) => {
  const Query = {
    simpleMessage: async (_: unknown, { name }: { name: string }): Promise<string> => {
      fastify.log.info(`Running Simple Message for user ${name}`);
      return `Hi ${name}, this is a health check resolver for this endpoint`;
    },
  };

  return { Query };
};

export default DummyResolvers;
