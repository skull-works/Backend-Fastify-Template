const add = async (_: unknown, { x, y }: { x: number; y: number }): Promise<number> => x + y;

const hiMarco = async (_: unknown): Promise<string> => 'Hi Marco';

const UserResolver = {
  Query: {
    add,
    hiMarco,
  },
};

export default UserResolver;
