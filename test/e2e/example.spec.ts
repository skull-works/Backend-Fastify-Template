import { FastifyInstance, FastifyLoggerInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'node:http';
import { build, tearDownSetup } from '../helper';

describe('Sample Tests', () => {
  let app: FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyLoggerInstance>;

  beforeAll(async () => {
    app = await build();
  });

  afterAll(async () => {
    await tearDownSetup();
  });

  describe('Sample Test 1', () => {
    it('Should return `Hello World`', async () => {
      const res = await app.inject({
        method: 'GET',
        url: '/hey',
      });

      expect(res.payload).toEqual('Hello World');
    });
  });
});
