const Config = require('config')
const Request = require('request');
const ResultApi = require('../../helpers/result.helpers')

class UserService {
    async showAllUsers() {
        return new Promise((resolve, reject) => {
            Request(Config.route.userUrl, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async showOneUser(idUser) {
        return new Promise((resolve, reject) => {
            Request(Config.route.userUrl + '/' + idUser, function (error, response, body) {
                const Result = new ResultApi(body, response, error);
                if (error) {
                    reject(Result);
                } else {
                    resolve(Result);
                }
            });
        });
    };

    async verif(email, password) {
        return new Promise((resolve, reject) => {
            Request.post({ url : Config.route.userUrl + "/verif", form: {
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

    async create(grade, email, password) {
        return new Promise((resolve, reject) => {
            Request.post({ url : Config.route.userUrl, form: { 
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

    async update(grade, email, password, confirmed, idUser) {
        return new Promise((resolve, reject) => {
            Request.put({ url : Config.route.userUrl + '/' + idUser, form: { 
                grade: grade,
                email: email,
                password: password,
                confirmed: confirmed
            }},
            function(err , httpResponse, body) {
                const Result = new ResultApi(body, httpResponse, err);
                if (err) {
                    reject(Result);
                } else {
                    console.log(Result);
                    resolve(Result);
                }
            })
        });
    };

    async validateUser(idUser, idAdmin) {
        return new Promise((resolve, reject) => {
            Request.put({ url : Config.route.userUrl + '/validate/' + idUser, form: { 
                idAdmin: idAdmin
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

    async delete(idUser) {
        return new Promise((resolve, reject) => {
            Request.delete({ url : Config.route.userUrl + '/' + idUser},
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

module.exports = new UserService();