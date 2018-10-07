'use strict';
const Joi = require('joi');
const UserController = require('../controllers/user.controllers')
exports.plugin = {
    register: async function (server, options) {

        server.route({
            method: 'GET',
            path: '/test',
            handler: UserController.Get
        });

        server.route({
            method: 'POST',
            path: '/testPost',
            config: {
                payload: {
                    parse: true
                },
                validate: {
                    payload: Joi.object({
                        user: Joi.number(),
                        test: Joi.bool().required()
                    })
                }
            },
            handler: function (request, h) {
                return request.payload;
            }
        });
    },
    "name": "usersRoot"
};
