import { FastifyPluginAsync } from 'fastify';
// import {makeExecutableSchema} from '@graphql-tools/schema';
// import {mergeTypeDefs, mergeResolvers} from '@graphql-tools/merge';
import mercurius from 'mercurius';
import DummyResolver from './dummy/dummy.resolver';
import UserResolver from './user/user.resolver';

interface RegistrarOptions {
    sample?: string;
}

const registrar: FastifyPluginAsync<RegistrarOptions> = async (fastify, opts): Promise<void> => {

    // Public Resolvers
    fastify.register(async (app) => {
        // initialize graphql instance
        fastify.register(mercurius, {
            prefix: '/dummy'
        });
        app.register(DummyResolver);
    });

    // Authenticated Resolvers
    fastify.register(async (app, opts) => {
        // initialize graphql instance
        fastify.register(mercurius, {
            prefix: '/api'
        });

        app.addHook('preParsing', async (req, res) => {
            fastify.log.info('Authentication Checking');
            // res.status(401).send('Not authorized');
        });

        app.register(UserResolver);
    });
    
}

export default registrar;