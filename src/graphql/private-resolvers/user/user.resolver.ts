import { Instance } from '../../interface/interface';

const UserResolver = (fastify: Instance) => {
  const Query = {
    hiUser: async (): Promise<string> => {
      fastify.log.info('Running hiUser');
      return 'Hi User';
    },
  };

  return { Query };
};

export default UserResolver;
