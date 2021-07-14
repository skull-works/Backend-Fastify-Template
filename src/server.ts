import * as closeWithGrace from 'close-with-grace';
import * as dotenv from 'dotenv';
import fastify from 'fastify';
import AppService from './app';

dotenv.config();

const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || 'Default';

const server = fastify({
  connectionTimeout: 10000,
  logger: {
    prettyPrint: {
      colorize: true,
      ignore: 'hostname,pid,reqId',
      translateTime: 'SYS:standard',
      timestampKey: 'time',
    },
    serializers: {
      req(request) {
        return {
          method: request.method,
          url: request.url,
        };
      },
    },
  },
});

// register the main application
server.register(AppService);

// delay is the number of milliseconds for the graceful close to finish
const closeListeners = closeWithGrace({ delay: 500 }, async function ({ signal, err, manual }: any) {
  if (err) {
    server.log.error(err);
  }
  await server.close();
});

server.addHook('onClose', async (_instance, done) => {
  closeListeners.uninstall();
  done();
});

server.listen(PORT, (err, _address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`App envirnoment running in ${APP_ENV} mode`);
});
