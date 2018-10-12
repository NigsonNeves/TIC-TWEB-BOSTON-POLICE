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

    async create(compnos, naturecode, incident_type_description
                ,main_crimecode,reptdistrict,reportingarea
                ,fromdate,weapontype,shooting
                ,domestic,shift,year
                ,month,day_week,ucrpart
                ,x,y,streetname
                ,xstreetname,location) {
        return new Promise((resolve, reject) => {
            Request.post({ url : Config.route.crimeUrl, form: { 
                compnos: compnos,
                naturecode: naturecode,
                incident_type_description: incident_type_description,
                main_crimecode: main_crimecode,
                reptdistrict: reptdistrict,
                reportingarea: reportingarea,
                fromdate: fromdate,
                weapontype: weapontype,
                shooting: shooting,
                domestic: domestic,
                shift: shift,
                year: year,
                month: month,
                day_week: day_week,
                ucrpart: ucrpart,
                x: x,
                y: y,
                streetname: streetname,
                xstreetname: xstreetname,
                location: location,
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