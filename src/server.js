/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');


const init = async() => {
    const server = Hapi.server({
        port: 80,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};


init();