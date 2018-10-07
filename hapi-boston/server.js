'use strict';

const Hapi = require('hapi');
const Config = require('config');

const options = {
    ops: {
        interval: 1000
    },
    reporters: {
        myConsoleReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ log: '*', response: '*' }]
        }, {
            module: 'good-console'
        }, 'stdout']
    }
};

// Create a server with a host and port
const server = Hapi.server({
    host: Config.get('api.host'),
    port: Config.get('api.port'),
    routes: {
        validate: {
          failAction: async (request, h, err) => {
            if (process.env.NODE_ENV === 'production') {
                server.log('ValidßationError', err.message);
                throw Boom.badRequest(`Invalid request payload input`);
            } else {
                server.log('ValidationError', err.message);
                throw err;
            }
          }
        }
      }
});

// Start the server
async function start() {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    server.log('Server run', 'Server running at: ' + server.info.uri);
};

server.register([{
    plugin: require('good'),
    options: options
}, {
    plugin: require('./app/user/routes/user.routes'),
    options: {}
}]).then(function() {
    server.route({
        method:'GET',
        path:'/',
        handler:function(request,h) {
            return'hello world';
        }
    });
    start();
})