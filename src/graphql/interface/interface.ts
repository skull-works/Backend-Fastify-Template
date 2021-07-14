import { FastifyInstance, FastifyLoggerInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'node:http';

export type Instance = FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyLoggerInstance>;
