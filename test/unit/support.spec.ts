import Fastify from 'fastify';
import Support from '../../src/plugins/support';

describe('Test Support Plugins', () => {
  const fastify = Fastify();

  beforeAll(async () => {
    void fastify.register(Support);
    await fastify.ready();
  });

  it('support works standalone', async () => {
    expect(fastify.someSupport()).toEqual('support here');
  });
});
