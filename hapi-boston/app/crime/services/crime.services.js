const Config = require('config')
const Request = require('request');
const ResultApi = require('../../helpers/result.helpers')

class CrimeService {
    async showAllCrimes() {
        return new Promise((resolve, reject) => {
            Request(Config.route.crimeUrl, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async showOneCrime(idCrime) {
        return new Promise((resolve, reject) => {
            Request(Config.route.crimeUrl + '/findBy/id/' + idCrime, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async showByCompnos(compnos) {
        return new Promise((resolve, reject) => {
            Request(Config.route.crimeUrl + '/findBy/compnos/' + compnos, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async showByWeapon(weapon) {
        return new Promise((resolve, reject) => {
            Request(Config.route.crimeUrl + '/findBy/weapons/' + weapon, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async showByStreetname(streetname) {
        return new Promise((resolve, reject) => {
            Request(Config.route.crimeUrl + '/findBy/streetname/' + streetname, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async showByMonth(month) {
        return new Promise((resolve, reject) => {
            Request(Config.route.crimeUrl + '/findBy/month/' + month, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async showByNature(nature) {
        return new Promise((resolve, reject) => {
            Request(Config.route.crimeUrl + '/findBy/nature/' + nature, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async showByDay(day) {
        return new Promise((resolve, reject) => {
            Request(Config.route.crimeUrl + '/findBy/day/' + day, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async showByUcrpart(ucrpart) {
        return new Promise((resolve, reject) => {
            Request(Config.route.crimeUrl + '/findBy/ucrpart/' + ucrpart, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async showByType(type) {
        return new Promise((resolve, reject) => {
            Request(Config.route.crimeUrl + '/findBy/type/' + type, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async showByDistrict(district) {
        return new Promise((resolve, reject) => {
            Request(Config.route.crimeUrl + '/findBy/district/' + district, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async showByDistrict(district) {
        return new Promise((resolve, reject) => {
            Request(Config.route.crimeUrl + '/findBy/district/' + district, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async create(grade, email, password) {
        return new Promise((resolve, reject) => {
            Request.post({ url : Config.route.crimeUrl, form: { 
                grade: grade,
                email: email,
                password: password
            }}, 
            function(err , httpResponse, body) {
                const Result = new ResultApi(body, httpResponse, err);
                if (err) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            })
        });
    };

    async delete(idCrime) {
        return new Promise((resolve, reject) => {
            Request.delete({ url : Config.route.crimeUrl + '/' + idCrime},
            function(err , httpResponse, body) {
                const Result = new ResultApi(body, httpResponse, err);
                if (err) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            })
        });
    };
}

module.exports = new CrimeService();