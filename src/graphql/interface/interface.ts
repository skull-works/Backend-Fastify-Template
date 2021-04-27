import { FastifyInstance, FastifyLoggerInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'node:http';

export type Instance = FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyLoggerInstance>;