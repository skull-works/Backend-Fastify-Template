// This file contains code that we reuse between our tests.
import Fastify, { FastifyInstance, FastifyLoggerInstance } from 'fastify';
import fp from 'fastify-plugin';
import { IncomingMessage, Server, ServerResponse } from 'node:http';
import App from '../src/app';


let app: FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyLoggerInstance>;

// Fill in this config with all the configurations
// needed for testing the application
async function config() {
  return {};
}

// Automatically build and tear down our instance
async function build() {
  app = Fastify();

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  void app.register(fp(App), await config());

  await app.ready();

  return app;
}

const tearDownSetup = async () => {
  await app.close();
};


export { config, build, tearDownSetup };
