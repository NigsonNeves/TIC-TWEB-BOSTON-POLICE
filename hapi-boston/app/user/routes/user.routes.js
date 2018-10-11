'use strict';
const Joi = require('joi');
const UserController = require('../controllers/user.controllers')
exports.plugin = {
    register: async function (server, options) {

        server.route({
            method: 'GET',
            path: '/api/users',
            handler: UserController.showAllUsers
        });

        server.route({
            method: 'GET',
            path: '/api/users/{idUser}',
            handler: UserController.showOneUser,
            config: {
                validate: {
                    params: {
                        idUser: Joi.number()
                    }
                }
            }
        });

        server.route({
            method: 'POST',
            path: '/api/users/verif',
            config: {
                payload: {
                    parse: true
                },
                validate: {
                    payload: Joi.object({
                        email: Joi.string().email().required(),
                        password: Joi.required()
                    })
                }
            },
            handler: UserController.verif
        });

        server.route({
            method: 'POST',
            path: '/api/users',
            config: {
                payload: {
                    parse: true
                },
                validate: {
                    payload: Joi.object({
                        grade: Joi.string().required(),
                        email: Joi.string().email().required(),
                        password: Joi.required()
                    })
                }
            },
            handler: UserController.create
        });

        server.route({
            method: 'PUT',
            path: '/api/users/{idUser}',
            config: {
                payload: {
                    parse: true
                },
                validate: {
                    params: {
                        idUser: Joi.number()
                    },
                    payload: Joi.object({
                        grade: Joi.string(),
                        email: Joi.string().email(),
                        confirmed: Joi.boolean(),
                        password: Joi.string()
                    })
                }
            },
            handler: UserController.update
        });

        server.route({
            method: 'PUT',
            path: '/api/users/{idUser}',
            config: {
                payload: {
                    parse: true
                },
                validate: {
                    params: {
                        idUser: Joi.number()
                    },
                    payload: Joi.object({
                        idAdmin: Joi.number(),
                    })
                }
            },
            handler: UserController.validate
        });

        server.route({
            method: 'DELETE',
            path: '/api/users/{idUser}',
            config: {
                payload: {
                    parse: true
                },
                validate: {
                    params: {
                        idUser: Joi.number()
                    }
                }
            },
            handler: UserController.delete
        });
    },
    "name": "usersRoot"
};
