import { Instance } from '../../interface/interface';
import { SignInInput } from './auth.interface';

const dataStore = [
  {
    user: 'marco',
    password: 'test123',
  },
];

const AuthResolvers = (fastify: Instance) => {
  const Mutation = {
    signIn: async (_: unknown, { signInInput }: { signInInput: SignInInput }): Promise<string> => {
      fastify.log.info(`Signing In`);
      const isAuth = dataStore.find((d) => {
        return d.user === signInInput.user && d.password === signInInput.password;
      });
      if (isAuth) return `SampleToken123`;
      return 'Not Authorized';
    },
  };

  return { Mutation };
};

export default AuthResolvers;
