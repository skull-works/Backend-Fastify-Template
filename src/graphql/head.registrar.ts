import { FastifyPluginAsync } from 'fastify';
import publicRegistrar from './public-resolvers/public.registrar';
import privateRegistrar from './private-resolvers/private.registrar';

interface RegistrarOptions {
    sample?: string;
}

const HeadRegistrar: FastifyPluginAsync<RegistrarOptions> = async (fastify, opts): Promise<void> => {

    // Public Resolvers
    fastify.register(publicRegistrar);

    // Authenticated Resolvers
    fastify.register(privateRegistrar);
    
}

export default HeadRegistrar;