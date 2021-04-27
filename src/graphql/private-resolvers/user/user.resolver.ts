import { Instance } from '../../interface/interface';

const UserResolver = (fastify: Instance) => {
  const Query = {

    hiMarco: async (_: unknown): Promise<string> => {
      fastify.log.info('Running hiMarco');
      return 'Hi Marco'
    }
    
  }

  return { Query };
  
};

export default UserResolver;
