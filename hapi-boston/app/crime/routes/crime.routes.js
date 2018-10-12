'use strict';
const Joi = require('joi');
const CrimeController = require('../controllers/crime.controllers')
exports.plugin = {
    register: async function (server, options) {

        server.route({
            method: 'GET',
            path: '/crimes',
            handler: CrimeController.showAllCrimes
        });

        server.route({
            method: 'GET',
            path: '/crimes/findBy/id/{idCrime}',
            handler: CrimeController.showOneCrime,
            config: {
                validate: {
                    params: {
                        idCrime: Joi.string()
                    }
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/crimes/findBy/compnos/{compnos}',
            handler: CrimeController.showByCompnos,
            config: {
                validate: {
                    params: {
                        compnos: Joi.string()
                    }
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/crimes/findBy/weapons/{weapon}',
            handler: CrimeController.showByWeapon,
            config: {
                validate: {
                    params: {
                        weapon: Joi.string()
                    }
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/crimes/findBy/streetname/{streetname}',
            handler: CrimeController.showByStreetname,
            config: {
                validate: {
                    params: {
                        streetname: Joi.string()
                    }
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/crimes/findBy/month/{month}',
            handler: CrimeController.showByMonth,
            config: {
                validate: {
                    params: {
                        month: Joi.string()
                    }
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/crimes/findBy/day/{day}',
            handler: CrimeController.showByDay,
            config: {
                validate: {
                    params: {
                        day: Joi.string()
                    }
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/crimes/findBy/ucrpart/{ucrpart}',
            handler: CrimeController.showByUcrpart,
            config: {
                validate: {
                    params: {
                        ucrpart: Joi.string()
                    }
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/crimes/findBy/type/{type}',
            handler: CrimeController.showByType,
            config: {
                validate: {
                    params: {
                        type: Joi.string()
                    }
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/crimes/findBy/nature/{nature}',
            handler: CrimeController.showByNature,
            config: {
                validate: {
                    params: {
                        nature: Joi.string()
                    }
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/crimes/findBy/district/{district}',
            handler: CrimeController.showByDistrict,
            config: {
                validate: {
                    params: {
                        district: Joi.string()
                    }
                }
            }
        });

        server.route({
            method: 'POST',
            path: '/crimes',
            config: {
                payload: {
                    parse: true
                },
                validate: {
                    payload: Joi.object({
                        compnos: Joi.string().required(),
                        naturecode: Joi.string().required(),
                        incident_type_description: Joi.string().required(),
                        main_crimecode: Joi.string().required(),
                        reptdistrict: Joi.string().required(),
                        reportingarea: Joi.string().required(),
                        fromdate: Joi.string().required(),
                        weapontype: Joi.string().required(),
                        shooting: Joi.string().required(),
                        domestic: Joi.string().required(),
                        shift: Joi.string().required(),
                        year: Joi.string().required(),
                        month: Joi.string().required(),
                        day_week: Joi.string().required(),
                        ucrpart: Joi.string().required(),
                        x: Joi.string().required(),
                        y: Joi.string().required(),
                        streetname: Joi.string().required(),
                        xstreetname: Joi.string().required(),
                        location: Joi.string().required(),
                    })
                }
            },
            handler: CrimeController.create
        });

        server.route({
            method: 'DELETE',
            path: '/crimes/{idCrime}',
            config: {
                payload: {
                    parse: true
                },
                validate: {
                    params: {
                        idCrime: Joi.string()
                    }
                }
            },
            handler: CrimeController.delete
        });
    },
    "name": "crimesRoot"
};
